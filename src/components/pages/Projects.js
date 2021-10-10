import React from "react";

import Section from "../Section";
import * as styles from "./Projects.module.scss";
import Carousel from "../carousel/Carousel";

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

function Projects(props) {
  return (
    <Section id="projects" className={styles.container}>
      <Carousel slides={projects} />
    </Section>
  );
}

export default Projects;
