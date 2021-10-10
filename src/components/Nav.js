import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import { useInView } from "react-intersection-observer";

import A from "./A";
import * as styles from "./Nav.module.scss";

function Nav(props) {
  const [device, setDevice] = useState();
  const [inViewRef, inView, entry] = useInView({
    threshold: 0,
  });
  useEffect(() => {
    setDevice(isMobile ? "mobile" : "desktop");
  }, []);
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        pointerEvents: "none",
      }}
    >
      <div id="nav-container-top" ref={inViewRef}></div>
      <nav
        className={`${
          device === "mobile" ? styles.mobileContainer : styles.desktopContainer
        } ${inView ? "" : styles.inView}`}
      >
        <A to="home" className={styles.link} activeClass={styles.active}>
          Home
        </A>
        <A to="about" className={styles.link} activeClass={styles.active}>
          About
        </A>
        <A to="projects" className={styles.link} activeClass={styles.active}>
          Projects
        </A>
        <A to="contact" className={styles.link} activeClass={styles.active}>
          Contact
        </A>
        <A to="home" className={styles.link} activeClass={styles.active}>
          {inView}
        </A>
      </nav>
    </div>
  );
}

export default Nav;
