import React, { Component } from "react";
import Item from "./../../shared/Item";
import HomeContentHeader from "./HomeContentHeader";

class HomeContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="container">
        <HomeContentHeader />
        <div class="row text-center">
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
