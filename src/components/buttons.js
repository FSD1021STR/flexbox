import React from "react";

const Buttons = ({ property, handleCssClass, buttonArray }) => {
  return (
    <div>
      <h3>{property}</h3>
      {buttonArray.map((btn) => (
        <button onClick={() => handleCssClass(btn)}>
          {btn.replace("_", " ")}
        </button>
      ))}
    </div>
  );
};
export default Buttons;
