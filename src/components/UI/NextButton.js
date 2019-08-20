import React from "react";

import "./Button.css";

const NextButton = ({ nextClick, disabled, text }) => {
  return (
    <button
      id="next"
      className="ui positive button button-style"
      onClick={nextClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

NextButton.defaultProps = {
  text: "Next"
};

export default NextButton;
