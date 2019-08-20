import React from "react";
import icon from "../assets/calories.png";

const headlineStyle = {
  color: "#3f3d56"
};

const Header = () => {
  return (
    <header>
      <h1 className="ui center aligned header" style={headlineStyle}>
        CALORIE COUNTER{" "}
        <img className="ui mini image top aligned" src={icon} alt="icon" />
      </h1>
    </header>
  );
};

export default Header;
