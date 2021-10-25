import React from "react";
import { Fade } from "react-reveal";

import Section from "../Section";
import * as styles from "./Services.module.scss";

const svgs = [
  {
    src: "/static/images/services/code_html_website_icon.svg",
    alt: "an icon",
    title: "Contempary Front-End Website Design",
  },
  {
    src: "/static/images/services/chat_group_video_icon.svg",
    alt: "an icon",
    title: "Constant Line of Communication",
  },
  {
    src: "/static/images/services/control_gears_process_icon.svg",
    alt: "an icon",
    title: "Efficient Server Side Construction",
  },
  {
    src: "/static/images/services/dashboard_speed_speedometer_icon.svg",
    alt: "an icon",
    title: "Quick Responsive Architecture",
  },
  {
    src: "/static/images/services/australia_house_opera_icon.svg",
    alt: "an icon",
    title: "100% Australian Based Out of Melbourne and  Sydney",
  },
  {
    src: "/static/images/services/achievement_award_badge_icon.svg",
    alt: "an icon",
    title: "Garuanteed Customer Satisfaction",
  },
];

function Services(props) {
  return (
    <Section id="services" className={styles.container}>
      <h1>What I Offer</h1>
      <ul className={styles.iconList}>
        {svgs.map((svg, idx) => (
          <Fade cascade key={idx}>
            <li className={styles.iconContainer}>
              <img src={svg.src} alt={svg.alt} />
              <h2>{svg.title}</h2>
            </li>
          </Fade>
        ))}
      </ul>
    </Section>
  );
}

export default Services;
