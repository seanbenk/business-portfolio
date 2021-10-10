import React from "react";

import * as styles from "./index.module.scss";

import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Projects from "../components/pages/Projects";
import Contact from "../components/pages/Contact";

const IndexPage = () => {
  return (
    <main>
      <Home />
      <About />
      <Projects />
      <Contact />
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
