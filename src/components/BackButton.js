import React from "react";

const BackButton = ({ backClick, disabled }) => {
  return (
    <button
      className="ui negative button"
      onClick={backClick}
      disabled={disabled}
    >
      Go back
    </button>
  );
};

export default BackButton;
