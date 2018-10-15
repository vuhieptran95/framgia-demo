import React, { Component } from "react";
import { ClipLoader } from "react-spinners";
import Modal from "../../shared/Modal";
import ClipLoading from "../../shared/ClipLoading";

const AddLoading = propname => WrappedComponent => props =>
  props[propname] === true ? (
    <WrappedComponent {...props}>
      <ClipLoading size={200} />
    </WrappedComponent>
  ) : (
    <WrappedComponent {...props} />
  );

export default AddLoading;
