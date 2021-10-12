import React from "react";

import * as styles from "./Card.module.scss";

function Card({
  title,
  subtitle,
  description,
  image,
  style,
  className = null,
}) {
  return (
    <div className={`${styles.container} ${className}`}>
      <img src={image} alt="hi there" />
      <h1>{title}</h1> <p>{description}</p>
    </div>
  );
}

export default Card;
