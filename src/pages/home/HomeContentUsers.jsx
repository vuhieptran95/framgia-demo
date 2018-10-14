import React, { Component } from "react";
import User from "./../../shared/User";
import AddLoadingUsers from "./../../helper/HOC/UserHOC";
import ModalAddNew from "./../../shared/ModalAddNew";

const HomeContentUsers = props => (
  <div>
    <div className="row text-center">
      {props.users.map(user => (
        <User key={user.username} user={user} />
      ))}
    </div>
  </div>
);

export default AddLoadingUsers("users")(HomeContentUsers);
