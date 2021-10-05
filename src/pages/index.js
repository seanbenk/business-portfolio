import React, { useState } from "react";
import { isMobile } from "react-device-detect";

import * as styles from "./index.module.scss";

import AppCanvas from "../components/model/AppCanvas";

const IndexPage = () => {
  const [device, setDevice] = useState();
  useEffect(() => {
    setDevice(isMobile ? "mobile" : "desktop");
  }, []);
  return (
    <main
      className={
        device !== "mobile" ? styles.desktopContainer : styles.mobileContainer
      }
    >
      <h1>Sean Benkenstein {device === "mobile" ? "Mobile" : "Desktop"}</h1>
      <AppCanvas />
    </main>
  );
};

export default IndexPage;

// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };

// const data = [
//   {
//     title: "Starwars",
//     description: "https://github.com/seanbenk/starwars",
//     image: require("../images/starwars.png"),
//   },
//   {
//     title: "Path Finder",
//     description: "https://github.com/seanbenk/path-finder",
//     image: require("../images/pathfinder.png"),
//   },
//   {
//     title: "Widget App",
//     description: "https://github.com/seanbenk/Widget_app",
//     image: require("../images/widgets.png"),
//   },
//   {
//     title: "Tic Tac Toe",
//     description: "https://github.com/seanbenk/tictactoe",
//     image: require("../images/tictactoe.png"),
//   },
//   {
//     title: "Flappy Duck",
//     description: "https://github.com/seanbenk/flappyduck",
//     image: require("../images/flappyduck.png"),
//   },
// ];
