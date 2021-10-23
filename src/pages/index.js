import React, { useState } from "react";
import { MobileView, BrowserView } from "react-device-detect";
import { slide as Menu } from "react-burger-menu";
import Nav from "../components/Navs/Nav";
import NavMobile from "../components/Navs/NavMobile";

import * as styles from "./index.module.scss";
import "./Nav.css";

import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Services from "../components/pages/Services";
import TechStack from "../components/pages/TechStack";
import Projects from "../components/pages/Projects";
import Contact from "../components/pages/Contact";

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);
  return (
    <main>
      <BrowserView>
        <Home />
        <Nav />
        <About />
        <TechStack />
        <Projects />
        <Services />
        <Contact />
      </BrowserView>
      <MobileView>
        <Menu isOpen={isOpen} onOpen={openMenu} onClose={closeMenu}>
          <NavMobile closeMenu={closeMenu} />
        </Menu>
        <Home />
        <About />
        <TechStack />
        <Projects />
        <Services />
        <Contact />
      </MobileView>
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
