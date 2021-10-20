import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import A from "../A";

import * as styles from "./Home.module.scss";

import Section from "../Section";
// import AppCanvas from "../model/AppCanvas";

function Home(props) {
  const [device, setDevice] = useState();
  useEffect(() => {
    setDevice(isMobile ? "mobile" : "desktop");
  }, []);
  return (
    <Section
      className={
        device !== "mobile" ? styles.desktopContainer : styles.mobileContainer
      }
      id="home"
    >
      <div>
        <h1>Sean Benkenstein</h1>
        <h2>web development</h2>
        {/* <h2>web solutions</h2>
        <h2>fullstack development</h2> */}
        <A to="about" className={styles.link}>
          <img
            src="/static/down-arrow.svg"
            alt={"down arrow"}
            style={{ height: "64px", width: "64px" }}
          />
        </A>
      </div>
      <div className={styles.videoContainer}>
        {/* <AppCanvas /> */}
        <video autoPlay muted loop className={styles.video}>
          <source src="/images/room.mp4" type="video/mp4" />
        </video>
      </div>
    </Section>
  );
}

export default Home;
