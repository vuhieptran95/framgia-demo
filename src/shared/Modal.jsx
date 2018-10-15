import React, { Component } from "react";
import AddLoading from "../helper/HOC/LoadingHOC";

const Modal = props => (
  <div
    className="modal fade"
    id={props.id}
    tabIndex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-max-width" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            {props.title}
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">{props.children}</div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
            id="close-modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default AddLoading("isProcessing")(Modal);
