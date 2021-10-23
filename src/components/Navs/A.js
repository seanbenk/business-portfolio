import React from "react";
import { Link } from "react-scroll";

function A({ to = "home", children, className, activeClass, onClick }) {
  return (
    <Link
      className={className}
      activeClass={activeClass}
      to={to}
      spy={true}
      smooth={true}
      //   offset={-70}
      duration={500}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default A;
