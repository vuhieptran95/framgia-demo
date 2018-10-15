import React from "react";
import { ClipLoader } from "react-spinners";
import ClipLoading from "./../../shared/ClipLoading";
const AddLoadingUsers = propname => WrappedComponent => props =>
  props[propname].length === 0 ? (
    <ClipLoading size={400} />
  ) : (
    <WrappedComponent {...props} />
  );

export default AddLoadingUsers;
