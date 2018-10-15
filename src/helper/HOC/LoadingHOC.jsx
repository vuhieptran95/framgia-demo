import React, { Component } from "react";
import ClipLoading from "../../shared/ClipLoading";

const AddLoading = propname => WrappedComponent => props =>
  props[propname] === true ? (
    <WrappedComponent {...props}>
      <ClipLoading size={200} />
    </WrappedComponent>
  ) : (
    <WrappedComponent {...props}>{props.children}</WrappedComponent>
  );

export default AddLoading;
