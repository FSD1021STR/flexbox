import React from "react";
import "./flexContainer.css";

const FlexContainer = ({ cssClass, elementClass }) => {
  return (
    <div className={cssClass}>
      <div className="element">1</div>
      <div className="element">2</div>
      <div className={elementClass}>3</div>
      <div className="element">4</div>
      <div className="element">5</div>
      <div className="element">6</div>
    </div>
  );
};
export default FlexContainer;
