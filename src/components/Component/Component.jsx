/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { VuesaxLinearArrowDown1 } from "../../icons/VuesaxLinearArrowDown1";
import { VuesaxLinearArrowDown3 } from "../../icons/VuesaxLinearArrowDown3";
import "./style.css";

export const Component = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "off",
  });

  return (
    <div className={`component ${state.property1} ${className}`}>
      <div
        className="frame"
        onClick={() => {
          dispatch("click");
        }}
      >
        <div className="text-wrapper">Dropdown</div>
        {state.property1 === "on" && <VuesaxLinearArrowDown3 className="vuesax-linear-arrow" />}

        {state.property1 === "off" && <VuesaxLinearArrowDown1 className="vuesax-linear-arrow" />}
      </div>
      <div className="div">
        <div className="div-wrapper">
          <div className="div-2">
            {state.property1 === "on" && <>This is Dynamic</>}

            {state.property1 === "off" && <>label1</>}
          </div>
        </div>
        <div className="div-wrapper">
          <div className="div-2">label2</div>
        </div>
        <div className="div-wrapper">
          <div className="div-2">label3</div>
        </div>
        <div className="div-wrapper">
          <div className="div-2">label4</div>
        </div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "on") {
    switch (action) {
      case "click":
        return {
          property1: "off",
        };
    }
  }

  if (state.property1 === "off") {
    switch (action) {
      case "click":
        return {
          property1: "on",
        };
    }
  }

  return state;
}

Component.propTypes = {
  property1: PropTypes.oneOf(["off", "on"]),
};
