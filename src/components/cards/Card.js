import React from "react";

import * as styles from "./Card.module.scss";

function Card({
  title,
  subtitle,
  description,
  github,
  link,
  image,
  style,
  alt,
  className = null,
}) {
  return (
    <div className={`${styles.container} ${className}`}>
      <img src={image} alt={alt} className={styles.projectImage} />
      <div className={styles.detailsContainer}>
        <h1>{title}</h1> <p>{description}</p>
        <div>
          <a href={github} target="_blank">
            <img src="/static/github-icon.svg" className={styles.githubIcon} />
          </a>
          <a href={link} target="_blank">
            <img
              src="/static/website-icon.svg"
              className={styles.websiteIcon}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
