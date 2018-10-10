import React, { Component } from "react";

const Item = () => (
  <div className="col-lg-3 col-md-6 mb-4">
    <div className="card">
      <img
        className="card-img-top"
        src="https://via.placeholder.com/350x350"
        alt=""
      />
      <div className="card-body">
        <h4 className="card-title">Card title</h4>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          esse necessitatibus neque.
        </p>
      </div>
      <div className="card-footer">
        <a href="#" className="btn btn-primary">
          Find Out More!
        </a>
      </div>
    </div>
  </div>
);

export default Item;
