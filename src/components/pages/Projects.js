import React from "react";

import Section from "../Section";
import ProjectsSlider from "../cards/ProjectsSlider";
import * as styles from "./Projects.module.scss";

function Projects(props) {
  return (
    <Section id="projects" className={styles.container}>
      <h2>My Projects</h2>
      <ProjectsSlider />
    </Section>
  );
}

export default Projects;
