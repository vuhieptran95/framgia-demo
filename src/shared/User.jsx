import React, { Component } from "react";
import Modal from "./Modal";

const User = props => (
  <div className="col-lg-3 col-md-6 mb-4">
    <div className="card">
      <img
        className="card-img-top"
        src={
          props.imgSrc ? props.imgSrc : "https://via.placeholder.com/350x350"
        }
        alt=""
      />
      <div className="card-body">
        <h4 className="card-title">{props.username}</h4>
        <p className="card-text">{props.email}</p>
        <p className="card-text">{props.name}</p>
      </div>
      <div className="card-footer">
        <button
          data-toggle="modal"
          data-target="#edit"
          className="btn btn-primary"
        >
          Click for details
        </button>
      </div>
    </div>
  </div>
);

export default User;
