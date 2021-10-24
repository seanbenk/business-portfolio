import React, { useState } from "react";
import { MobileView, BrowserView } from "react-device-detect";
import { push as Menu } from "react-burger-menu";
import Nav from "../components/Navs/Nav";
import NavMobile from "../components/Navs/NavMobile";

import * as styles from "./index.module.scss";

import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Services from "../components/pages/Services";
import TechStack from "../components/pages/TechStack";
import Projects from "../components/pages/Projects";
import Contact from "../components/pages/Contact";

import menuStyles from "../components/Navs/menuStyles.js";

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
        <div id="outer-container">
          <Menu
            isOpen={isOpen}
            onOpen={openMenu}
            onClose={closeMenu}
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
            styles={menuStyles}
          >
            <NavMobile closeMenu={closeMenu} />
          </Menu>
          <div id="page-wrap">
            <Home />
            <About />
            <TechStack />
            <Projects />
            <Services />
            <Contact />
          </div>
        </div>
      </MobileView>
    </main>
  );
};

export default IndexPage;
