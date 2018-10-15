import React from "react";
import { ClipLoader } from "react-spinners";

const ClipLoading = props => (
  <div className="row">
    <div className="col-lg-4" />
    <div className="col-lg-5">
      <ClipLoader
        sizeUnit={"px"}
        size={props.size}
        color={"#123abd"}
        loading={true}
      />
    </div>
  </div>
);

export default ClipLoading;
