import React, { Component } from "react";

const ButtonToggle = props => (
  <div className={props.size}>
    <button
      className={props.className}
      data-toggle="modal"
      data-target={`#${props.target}`}
    >
      <strong>{props.text}</strong>
    </button>
  </div>
);

export default ButtonToggle;
