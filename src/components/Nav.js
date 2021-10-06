import React from "react";

import A from "./A";
import * as styles from "./Nav.module.scss";

function Nav(props) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}
    >
      <nav className={styles.container}>
        <A to="home" className={styles.link} activeClass={styles.active}>
          Home
        </A>
        <A to="about" className={styles.link} activeClass={styles.active}>
          About
        </A>
        <A to="contact" className={styles.link} activeClass={styles.active}>
          Contact
        </A>
      </nav>
    </div>
  );
}

export default Nav;
