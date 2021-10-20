import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import { useInView } from "react-intersection-observer";

import A from "./A";
import * as styles from "./Nav.module.scss";

function Nav(props) {
  const [device, setDevice] = useState();
  useEffect(() => {
    setDevice(isMobile ? "mobile" : "desktop");
  }, []);
  return (
    <nav
      className={`${
        device === "mobile" ? styles.mobileContainer : styles.desktopContainer
      }`}
    >
      <A to="home" className={styles.link} activeClass={styles.active}>
        Home
      </A>
      <A to="about" className={styles.link} activeClass={styles.active}>
        About
      </A>
      <A to="services" className={styles.link} activeClass={styles.active}>
        Services
      </A>
      <A to="projects" className={styles.link} activeClass={styles.active}>
        Projects
      </A>
      <A to="contact" className={styles.link} activeClass={styles.active}>
        Contact
      </A>
      <A to="home" className={styles.link} activeClass={styles.active}></A>
    </nav>
  );
}

export default Nav;
