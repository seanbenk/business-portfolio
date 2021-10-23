import React from "react";

import * as styles from "./Details.module.scss";

function Details({ onClick, title, description }) {
  console.log("hi");
  return (
    <div onClick={onClick} className={styles.container}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Details;
