import React from "react";

import * as styles from "./layout.module.scss";

function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default Layout;
