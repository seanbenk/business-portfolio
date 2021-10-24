import React from "react";

import A from "./A";

import * as styles from "./NavMobile.module.scss";

function NavMobile({ closeMenu }) {
  return (
    <div className={styles.container}>
      <>
        <A to="home" onClick={closeMenu} className={styles.A}>
          Home
        </A>
        <A to="about" onClick={closeMenu} className={styles.A}>
          About
        </A>
        <A to="skills" onClick={closeMenu} className={styles.A}>
          Skills
        </A>
        <A to="projects" onClick={closeMenu} className={styles.A}>
          Projects
        </A>
        <A to="services" onClick={closeMenu} className={styles.A}>
          Services
        </A>
        <A to="contact" onClick={closeMenu} className={styles.A}>
          Contact
        </A>
      </>
    </div>
  );
}

export default NavMobile;
