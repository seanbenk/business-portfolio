import React from "react";
import { Fade } from "react-reveal";

import Section from "../Section";

import * as styles from "./TechStack.module.scss";

const icons = [
  {
    src: "/static/images/techstack/ReactJS.svg",
    alt: "react icon",
    title: "react native",
  },
  {
    src: "/static/images/techstack/NextJS.svg",
    alt: "next js icon",
    title: "next js",
  },
  {
    src: "/static/images/techstack/NodeJS.svg",
    alt: "Node JS icon",
    title: "Node Js",
  },
  { src: "/static/images/techstack/Ruby.svg", alt: "ruby icon", title: "ruby" },
  {
    src: "/static/images/techstack/HTML5.svg",
    alt: "html5 icon",
    title: "html5",
  },
  { src: "/static/images/techstack/CSS3.svg", alt: "css3 icon", title: "css3" },
];

function TechStack(props) {
  return (
    <Section className={styles.container} id="skills">
      <h1>I have experience in</h1>
      <div className={styles.iconGrid}>
        {icons.map((icon, idx) => (
          <Fade key={idx}>
            <div className={styles.iconContainer}>
              <img src={icon.src} alt={icon.alt} />
            </div>
          </Fade>
        ))}
      </div>
    </Section>
  );
}

export default TechStack;
