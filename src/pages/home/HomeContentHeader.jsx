import React, { Component } from "react";

const HomeContentHeader = props => (
  <div className="row">
    <h2 className="col-lg-9">Users</h2>
    {props.children}
  </div>
);

export default HomeContentHeader;
