import React from "react";
import ModalAddNewEdit from "../../shared/ModalAddNewEdit";

const HomeContentHeaderAddNew = props => (
  <div className="col-lg-3">
    <button
      className="btn btn-success btn-block"
      data-toggle="modal"
      data-target="#addnew"
    >
      <strong>Add new</strong>
    </button>
    <ModalAddNewEdit
      loginUser={props.loginUser}
      isAddNew={true}
      id="addnew"
      title="Add new user"
    />
  </div>
);

export default HomeContentHeaderAddNew;
