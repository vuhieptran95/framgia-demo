import React from "react";
import AddLoading from "./../../helper/HOC/LoadingHOC";

const AccountWrap = props => <div>{props.children}</div>;

export default AddLoading("isProcessing")(AccountWrap);
