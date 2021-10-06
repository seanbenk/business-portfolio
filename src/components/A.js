import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function A({ to = "home", children, className, activeClass }) {
  return (
    <Link
      className={className}
      activeClass={activeClass}
      to={to}
      spy={true}
      smooth={true}
      //   offset={-70}
      duration={500}
    >
      {children}
    </Link>
  );
}

export default A;
