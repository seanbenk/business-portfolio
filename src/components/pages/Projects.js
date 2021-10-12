import React from "react";
import Fade from "react-reveal/Fade";

import Section from "../Section";
import ProjectsSlider from "../cards/ProjectsSlider";
import * as styles from "./Projects.module.scss";

function Projects(props) {
  return (
    <Section id="projects" className={styles.container}>
      <Fade left>
        <h2>My Projects</h2>
      </Fade>
      <Fade top>
        <ProjectsSlider />
      </Fade>
    </Section>
  );
}

export default Projects;
