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
    github: "https://github.com/seanbenk/starwars",
    image: "/images/starwars.png",
    description:
      "As part of one of my first coding tests, this application uses Next Js and React to display the details of starwars movies using the startwars API",
    link: "https://radiant-temple-44508.herokuapp.com/",
  },
  {
    title: "Path Finder",
    github: "https://github.com/seanbenk/path-finder",
    image: "/images/pathfinder.png",
    description:
      "This is an app that demonstrates path finding, dijkstra's algorithm is used to find a path from point a to point b. This application was made using react js",
    link: "https://seanbenk.github.io/path-finder/",
  },
  {
    title: "Widget App",
    github: "https://github.com/seanbenk/Widget_app",
    image: "/images/widgets.png",
    description:
      "Widget Wizards is a group project I worked on with the idea being a dashboard application you can use as your home page in your favourite browser",
    link: "https://widget-wizard.herokuapp.com/",
  },
  {
    title: "Tic Tac Toe",
    github: "https://github.com/seanbenk/tictactoe",
    image: "/images/tictactoe.png",
    description:
      "A simple Tic Tac Toe game you can play against a friend, uses pure html5, css3 and javascript.",
    link: "https://seanbenk.github.io/tictactoe/",
  },
  {
    title: "Flappy Duck",
    github: "https://github.com/seanbenk/flappyduck",
    image: "/images/flappyduck.png",
    description:
      "a small game I made to demonstrate the power of Phaser, a javascript framework for game design",
    link: "https://seanbenk.github.io/flappyduck/",
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
  const properties = {
    duration: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    indicators: true,
  };
  return (
    <Slider {...settings} adaptiveHeight>
      {projects.map((project, idx) => (
        <Card
          key={idx}
          title={project.title}
          description={project.description}
          image={project.image}
          github={project.github}
          link={project.link}
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
