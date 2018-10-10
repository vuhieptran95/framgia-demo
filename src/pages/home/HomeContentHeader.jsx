import React, { Component } from "react";
import HomeContentHeaderModal from "./HomeContentHeaderModal";

const HomeContentHeader = () => (
  <div className="row">
    <h2 className="col-lg-9">Users</h2>
    <div className="col-lg-3">
      <button
        className="btn btn-success btn-block"
        data-toggle="modal"
        data-target="#addNewModal"
      >
        <strong>Add new</strong>
      </button>
    </div>
    <HomeContentHeaderModal />
  </div>
);

export default HomeContentHeader;
