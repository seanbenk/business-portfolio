import React from "react";

function Section({ id, children, className, fixedHeight = true }) {
  return (
    <section
      className={className}
      id={id}
      style={{ minHeight: fixedHeight ? "100vh" : "fit-content" }}
    >
      {children}
    </section>
  );
}

export default Section;
