import React from "react";

import A from "./A";

import * as styles from "./NavMobile.module.scss";

function NavMobile({ closeMenu }) {
  return (
    <nav className={styles.container}>
      <A to="home" onClick={closeMenu}>
        Home
      </A>
      <A to="about" onClick={closeMenu}>
        About
      </A>
      <A to="skills" onClick={closeMenu}>
        Skills
      </A>
      <A to="projects" onClick={closeMenu}>
        Projects
      </A>
      <A to="services" onClick={closeMenu}>
        Services
      </A>
      <A to="contact" onClick={closeMenu}>
        Contact
      </A>
    </nav>
  );
}

export default NavMobile;
