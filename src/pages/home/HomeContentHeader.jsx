import React, { Component } from "react";
import Modal from "../../shared/Modal";
import ModalAddNew from "./../../shared/ModalAddNew";

const HomeContentHeader = () => (
  <div className="row">
    <h2 className="col-lg-9">Users</h2>
    <div className="col-lg-3">
      <button
        className="btn btn-success btn-block"
        data-toggle="modal"
        data-target="#addnew"
      >
        <strong>Add new</strong>
      </button>
    </div>
    <ModalAddNew id="addnew" title="Add new item" />
  </div>
);

export default HomeContentHeader;
