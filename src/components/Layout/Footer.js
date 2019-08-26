import React from "react";

const footerPosition = {
  position: "absolute",
  bottom: 0,
  width: "100%"
};

const Footer = () => {
  return (
    <footer
      style={footerPosition}
      className="ui inverted vertical footer segment center aligned"
    >
      Created by <a href="https://sergimarquez.dev">Sergi Marquez</a> |{" "}
      <a href="https://github.com/sergimarquez/calorie-counter">
        <i className="github icon"></i>
      </a>
    </footer>
  );
};

export default Footer;
