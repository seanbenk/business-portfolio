import React from "react";
import { Link } from "gatsby";

import * as styles from "./Nav.module.scss";

function Nav(props) {
  return (
    <nav className={styles.container}>
      <Link to="/" className={styles.link}>
        Home
      </Link>
      <Link to="/about" className={styles.link}>
        About
      </Link>
    </nav>
  );
}

export default Nav;
