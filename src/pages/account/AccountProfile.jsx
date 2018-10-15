import React, { Component } from "react";

const AccountProfile = props => (
  <div>
    <h3>Profile</h3>
    <h5>
      Hi, welcome {props.loginUser.email}, click here to log out:{" "}
      <a onClick={props.handleLogOut} href="#">
        Goodbye
      </a>
    </h5>
    <h4 className="margin-top-50">Here's what you can do in Home Page</h4>
    {props.children}
  </div>
);

export default AccountProfile;
