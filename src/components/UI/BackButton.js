import React from "react";

import "./Button.css";

const BackButton = ({ backClick, disabled }) => {
  return (
    <button
      id="back"
      className="ui negative button button-style"
      onClick={backClick}
      disabled={disabled}
    >
      Go back
    </button>
  );
};

export default BackButton;
