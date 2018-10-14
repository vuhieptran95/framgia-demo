import React, { Component } from "react";
import { ClipLoader } from "react-spinners";
import Modal from "../../shared/Modal";

const AddLoadingModal = propname => WrappedComponent => props =>
  props[propname] === true ? (
    <WrappedComponent {...props}>
      <div className="row">
        <div className="col-lg-4" />
        <div className="col-lg-5">
          <ClipLoader
            sizeUnit={"px"}
            size={200}
            color={"#123abd"}
            loading={true}
          />
        </div>
      </div>
    </WrappedComponent>
  ) : (
    <WrappedComponent {...props} />
  );

export const AddDeletedUserModal = propname => WrappedComponent => props =>
  props[propname] == null ? (
    <Modal>
      <h3>User Deleted</h3>
    </Modal>
  ) : (
    <WrappedComponent {...props} />
  );

export default AddLoadingModal;
