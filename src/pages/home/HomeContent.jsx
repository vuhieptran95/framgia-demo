import React, { Component } from "react";
import Item from "./../../shared/Item";
import HomeContentHeader from "./HomeContentHeader";
import Modal from "./../../shared/Modal";

class HomeContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <HomeContentHeader />

        <div className="row text-center">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    );
  }
}

export default HomeContent;
