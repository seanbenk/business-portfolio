import React from "react";
import { Fade } from "react-reveal";

import * as styles from "./About.module.scss";

import Section from "../Section";

function About(props) {
  return (
    <Section id="about" className={styles.container}>
      <Fade>
        <div className={styles.imageDiv}>
          <img src="/static/images/about/profile_image.png" />
        </div>
      </Fade>
      <Fade>
        <div className={styles.textDiv}>
          <img
            src="/static/images/about/harbour-bridge.svg"
            alt="harbour bridge"
            style={{
              position: "absolute",
              height: "30vh",
              width: "30vh",
              right: "6vw",
              bottom: "-60%",
            }}
          />
          <h1>Hi there!</h1>
          <p>
            I'm Sean, a software engineer and web developer from Australia. I
            have spent the last 3 years studying and refining my skills in
            coding, problem solving and delivering beautiful solutions.
          </p>
          <p>
            I have graduated from the Software Engineering bootcamp at General
            Assembly where I collected an additional 500 hours of experience,
            and what's even better is I got invited to come back and jump on
            board as an instructor! I am always looking for my next big
            opportunity to grow and work with great people on fun projects, so
            don't be afraid to reach out and contact me!
          </p>
        </div>
      </Fade>
    </Section>
  );
}

export default About;
