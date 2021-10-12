import React from "react";
import { Fade } from "react-reveal";

import * as styles from "./About.module.scss";

import Section from "../Section";

const svgs = [
  {
    src: "/static/australia_house_opera_icon.svg",
    alt: "an icon",
    title: "100% Australian Based out of Sydney",
  },
  {
    src: "/static/chat_group_video_icon.svg",
    alt: "an icon",
    title: "Constant Line of Communication",
  },
  {
    src: "/static/code_html_website_icon.svg",
    alt: "an icon",
    title: "Contempary Front-End Website Design",
  },
  {
    src: "/static/control_gears_process_icon.svg",
    alt: "an icon",
    title: "Efficient Server Side Construction",
  },
  {
    src: "/static/dashboard_speed_speedometer_icon.svg",
    alt: "an icon",
    title: "Fast Reliable Speeds",
  },
  {
    src: "/static/achievement_award_badge_icon.svg",
    alt: "an icon",
    title: "Garuanteed Customer Satisfaction",
  },
  //   { src: "/static/devices_laptop_mobile_icon.svg", alt: "an icon" },
];

function About(props) {
  return (
    <Section id="about" className={styles.desktopContainer} fixedHeight={false}>
      <h2>Services We Offer</h2>
      <ul>
        {svgs.map((svg, idx) => (
          <Fade left cascade key={idx} delay={200 * idx}>
            <li className={styles.iconContainer}>
              <img src={svg.src} alt={svg.alt} />
              <h2>{svg.title}</h2>
            </li>
          </Fade>
        ))}
      </ul>
      {/* <h1>About section</h1> */}
    </Section>
  );
}

export default About;
