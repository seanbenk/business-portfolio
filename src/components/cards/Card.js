import React from "react";

import * as styles from "./Card.module.scss";

function Card({ title, subtitle, description, image, activeCard, style }) {
  return (
    <div
      style={style}
      className={activeCard ? styles.activeCard : styles.container}
    >
      <img src={image} alt="hi there" />
      <h1>{title}</h1> <p>{description}</p>
    </div>
  );
}

export default Card;
