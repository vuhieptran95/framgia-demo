import React, { Component } from "react";
import User from "./../../shared/User";
import AddLoadingUsers from "./../../helper/HOC/UserHOC";

const HomeContentUsers = props => (
  <div>
    <div className="row text-center">
      {props.users.map(user => (
        <User
          key={user.username}
          imgSrc={user.profileImage}
          name={user.name}
          email={user.email}
          username={user.username}
        />
      ))}
    </div>
  </div>
);

export default AddLoadingUsers("users")(HomeContentUsers);
