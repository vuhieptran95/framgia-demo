import React from "react";
import { ClipLoader } from "react-spinners";
const AddLoadingUsers = propname => WrappedComponent => props =>
  props[propname].length === 0 ? (
    <div className="row">
      <div className="col-lg-3" />
      <div className="col-lg-5">
        <ClipLoader
          sizeUnit={"px"}
          size={400}
          color={"#123abd"}
          loading={true}
        />
      </div>
    </div>
  ) : (
    <WrappedComponent {...props} />
  );

export default AddLoadingUsers;
