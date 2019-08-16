import React from "react";

const NextButton = ({ nextClick, disabled, text }) => {
  return (
    <button
      id="next"
      className="ui positive button"
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
