import React, { Component } from "react";
import Modal from "./Modal";
import ModalAddNew from "./ModalAddNew";

const User = props => (
  <div className="col-lg-3 col-md-6 mb-4">
    <div className="card">
      <img
        className="card-img-top"
        src={
          props.user.profileImage
            ? props.user.profileImage
            : "https://via.placeholder.com/350x350"
        }
        alt=""
      />
      <div className="card-body">
        <h4 className="card-title">{props.user.username}</h4>
        <p className="card-text">{props.user.email}</p>
        <p className="card-text">{props.user.name}</p>
      </div>
      <div className="card-footer">
        <button
          data-toggle="modal"
          data-target={`#edit-${props.user.username}`}
          className="btn btn-primary"
        >
          Click for details
        </button>
      </div>
    </div>
    <div className="text-align-left">
      <ModalAddNew
        isAddNew={false}
        user={props.user}
        id={`edit-${props.user.username}`}
        title="Edit User"
      />
    </div>
  </div>
);

export default User;
