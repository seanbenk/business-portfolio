import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "material-icons/iconfont/material-icons.css";

import * as styles from "./ProjectsSlider.module.scss";
import Card from "./Card";

const projects = [
  {
    title: "Star Wars",
    github: "https://github.com/seanbenk/starwars",
    image: "/static/images/projects/starwars.png",
    description:
      "As part of one of my first coding tests. This application uses Next Js and React to display the details of Star Wars movies using the star wars API",
    link: "https://radiant-temple-44508.herokuapp.com/",
  },
  {
    title: "Path Finder",
    github: "https://github.com/seanbenk/path-finder",
    image: "/static/images/projects/pathfinder.png",
    description:
      "This is an app that demonstrates path finding techniques. The user can design a custom maze and dijkstra's algorithm is used to find a solution from point a to point b. This application was made using React JS",
    link: "https://seanbenk.github.io/path-finder/",
  },
  {
    title: "Widget App",
    github: "https://github.com/seanbenk/Widget_app",
    image: "/static/images/projects/widgets.png",
    description:
      "Widget Wizards is a group project I worked on with the idea being a dashboard application you can use as your home page in your favourite browser",
    link: "https://widget-wizard.herokuapp.com/",
  },
  {
    title: "Tic Tac Toe",
    github: "https://github.com/seanbenk/tictactoe",
    image: "/static/images/projects/tictactoe.png",
    description:
      "A simple Tic Tac Toe game you can play against a friend, uses pure html5, css3 and javascript.",
    link: "https://seanbenk.github.io/tictactoe/",
  },
  // {
  //   title: "Flappy Duck",
  //   github: "https://github.com/seanbenk/flappyduck",
  //   image: "/static/images/projects/flappyduck.png",
  //   description:
  //     "a small game I made to demonstrate the power of Phaser, a javascript framework for game design",
  //   link: "https://seanbenk.github.io/flappyduck/",
  // },
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
    slidesToShow: isMobile ? 1 : 3,
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
