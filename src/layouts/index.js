import React from "react";

import Nav from "../components/Nav";
import * as styles from "./layout.module.scss";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      {/* <Nav /> */}
      {children}
    </div>
  );
}

export default Layout;
