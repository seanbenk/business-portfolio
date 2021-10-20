import React from "react";
import { Fade } from "react-reveal";

import Section from "../Section";
import * as styles from "./Services.module.scss";

const svgs = [
  {
    src: "/static/code_html_website_icon.svg",
    alt: "an icon",
    title: "Contempary Front-End Website Design",
  },
  {
    src: "/static/chat_group_video_icon.svg",
    alt: "an icon",
    title: "Constant Line of Communication",
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
    src: "/static/australia_house_opera_icon.svg",
    alt: "an icon",
    title: "100% Australian Based out of Sydney",
  },
  {
    src: "/static/achievement_award_badge_icon.svg",
    alt: "an icon",
    title: "Garuanteed Customer Satisfaction",
  },
  //   { src: "/static/devices_laptop_mobile_icon.svg", alt: "an icon" },
];

function Services(props) {
  return (
    <Section
      id="services"
      className={`${styles.desktopContainer} ${styles.offerSection}`}
    >
      <h1>What I Offer</h1>
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
    </Section>
  );
}

export default Services;
