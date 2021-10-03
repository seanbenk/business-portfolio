import React from "react";

import * as styles from "./Card.module.scss";

function Card({ title, subtitle, description, image }) {
  console.log(image);
  return (
    <div className={styles.container}>
      <img src={image.default} alt="hi there" />
      <h1>{title}</h1> <p>{description}</p>
    </div>
  );
}

export default Card;
