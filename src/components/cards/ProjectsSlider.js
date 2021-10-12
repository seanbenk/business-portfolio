import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "material-icons/iconfont/material-icons.css";

import * as styles from "./ProjectsSlider.module.scss";
import Card from "./Card";

const projects = [
  {
    title: "Starwars",
    description: "https://github.com/seanbenk/starwars",
    image: "/images/starwars.png",
  },
  {
    title: "Path Finder",
    description: "https://github.com/seanbenk/path-finder",
    image: "/images/pathfinder.png",
  },
  {
    title: "Widget App",
    description: "https://github.com/seanbenk/Widget_app",
    image: "/images/widgets.png",
  },
  {
    title: "Tic Tac Toe",
    description: "https://github.com/seanbenk/tictactoe",
    image: "/images/tictactoe.png",
  },
  {
    title: "Flappy Duck",
    description: "https://github.com/seanbenk/flappyduck",
    image: "/images/flappyduck.png",
  },
];

function PrevArrow({ onClick }) {
  return (
    <span
      className={`material-icons-round ${styles.arrow} ${styles.leftArrow}`}
      onClick={onClick}
    >
      arrow_back_ios
    </span>
  );
}

function NextArrow({ onClick }) {
  return (
    <span
      className={`material-icons-round ${styles.arrow} ${styles.rightArrow}`}
      onClick={onClick}
    >
      arrow_forward_ios
    </span>
  );
}

function ProjectsSlider(props) {
  const [sliderIndex, setSliderIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    beforeChange: (oldIdx, nextIdx) => setSliderIndex(nextIdx),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <Slider {...settings}>
      {projects.map((project, idx) => (
        <Card
          key={idx}
          title={project.title}
          description={project.description}
          image={project.image}
          className={
            sliderIndex === idx
              ? `${styles.card} ${styles.activeCard}`
              : `${styles.card} ${styles.unActiveCard}`
          }
        />
      ))}
    </Slider>
  );
}

export default ProjectsSlider;
