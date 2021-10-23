import React from "react";

import A from "./A";
import * as styles from "./Nav.module.scss";

function Nav(props) {
  return (
    <>
      <div className={styles.burger}>
        <div className="burger-one"></div>
        <div className="burger-two"></div>
        <div className="burger-three"></div>
      </div>
      <nav className={styles.container}>
        <A to="home" className={styles.link} activeClass={styles.active}>
          Home
        </A>
        <A to="about" className={styles.link} activeClass={styles.active}>
          About
        </A>
        <A to="skills" className={styles.link} activeClass={styles.active}>
          Skills
        </A>
        <A to="projects" className={styles.link} activeClass={styles.active}>
          Projects
        </A>
        <A to="services" className={styles.link} activeClass={styles.active}>
          Services
        </A>
        <A to="contact" className={styles.link} activeClass={styles.active}>
          Contact
        </A>
      </nav>
    </>
  );
}

export default Nav;
