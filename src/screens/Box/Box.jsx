import React from "react";
import { Component } from "../../components/Component";
import "./style.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="component-2">
        <Component className="property-on" property1="on" />
        <Component className="property-off" property1="off" />
      </div>
    </div>
  );
};
