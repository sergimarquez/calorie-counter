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
      Created by Sergi Marquez | FAQ
    </footer>
  );
};

export default Footer;
