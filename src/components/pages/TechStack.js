import React from "react";
import Section from "../Section";

import * as styles from "./TechStack.module.scss";

const icons = [
  { src: "/static/react-icon.svg", alt: "react icon", title: "react native" },
  { src: "/static/nextjs-icon.svg", alt: "next js icon", title: "next js" },
  { src: "/static/html5-icon.svg", alt: "html5 icon", title: "html5" },
  { src: "/static/css3-icon.svg", alt: "css3 icon", title: "css3" },
  { src: "/static/ruby-icon.svg", alt: "ruby icon", title: "ruby" },
  { src: "/static/js-icon.svg", alt: "javascript icon", title: "javascript" },
];

function TechStack(props) {
  return (
    <Section className={styles.container}>
      {icons.map((icon) => (
        <div className={styles.iconContainer}>
          <img src={icon.src} alt={icon.alt} />
          <h2>{icon.title}</h2>
        </div>
      ))}
    </Section>
  );
}

export default TechStack;
