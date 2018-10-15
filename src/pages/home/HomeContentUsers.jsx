import React, { Component } from "react";
import User from "./../../shared/User";
import AddLoadingUsers from "./../../helper/HOC/UserHOC";
import ModalAddNewEdit from "../../shared/ModalAddNewEdit";

const HomeContentUsers = props => (
  <div>
    <div className="row text-center">
      {props.users.map(user => (
        <User loginUser={props.loginUser} key={user.username} user={user} />
      ))}
    </div>
  </div>
);

export default AddLoadingUsers("users")(HomeContentUsers);
