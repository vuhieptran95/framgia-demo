import React, { Component } from "react";

const Item = () => (
  <div class="col-lg-3 col-md-6 mb-4">
    <div class="card">
      <img
        class="card-img-top"
        src="https://via.placeholder.com/350x350"
        alt=""
      />
      <div class="card-body">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          esse necessitatibus neque.
        </p>
      </div>
      <div class="card-footer">
        <a href="#" class="btn btn-primary">
          Find Out More!
        </a>
      </div>
    </div>
  </div>
);

export default Item;
