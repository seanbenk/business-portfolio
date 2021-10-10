import React, { useReducer } from "react";

import Card from "../cards/Card";

function Carousel({ slides }) {
  const initialState = { slideIndex: 0 };
  const slidesReducer = (state, action) => {
    const len = slides.length;
    switch (action.type) {
      case "PREV":
        return {
          ...state,
          slideIndex: state.slideIndex === 0 ? len - 1 : state.slideIndex - 1,
        };
      case "NEXT":
        return {
          ...state,
          slideIndex: state.slideIndex >= len - 1 ? 0 : state.slideIndex + 1,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(slidesReducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch({ type: "PREV" })}>prev</button>
      {slides.map((slide, idx) => (
        <Card
          style={{ "--offset": state.slideIndex - idx }}
          title={slide.title}
          description={slide.description}
        />
      ))}
      <button onClick={() => dispatch({ type: "NEXT" })}>next</button>
    </div>
  );
}

export default Carousel;

// {projects.map((project, idx) => (
//   <Card
//     key={idx}
//     title={project.title}
//     description={project.description}
//     image={project.image}
//   />
// ))}
