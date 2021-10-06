import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

import * as styles from "./Home.module.scss";

import Section from "../Section";
import AppCanvas from "../model/AppCanvas";

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
      <h1>Sean Benkenstein</h1>
      <div className={styles.canvas}>
        <AppCanvas />
      </div>
    </Section>
  );
}

export default Home;
