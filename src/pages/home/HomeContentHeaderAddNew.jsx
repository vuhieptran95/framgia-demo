import React from "react";
import ModalAddNew from "./../../shared/ModalAddNew";

const HomeContentHeaderAddNew = () => (
  <div className="col-lg-3">
    <button
      className="btn btn-success btn-block"
      data-toggle="modal"
      data-target="#addnew"
    >
      <strong>Add new</strong>
    </button>
    <ModalAddNew isAddNew={true} id="addnew" title="Add new user" />
  </div>
);

export default HomeContentHeaderAddNew;
