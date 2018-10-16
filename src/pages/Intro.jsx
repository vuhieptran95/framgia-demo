import React, { Component } from "react";

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="">
        <header className="jumbotron my-4">
          <h1 className="display-3">
            Demo project apply thực tập/part time ReactJS tại Framgia
          </h1>
          <h5>
            <a href="https://github.com/vuhieptran95/framgia-demo">
              Source code client
            </a>
            : Sử dụng ReactJS, FirebaseSDK, Axios, React-Router
          </h5>
          <h5>
            <a href="https://github.com/vuhieptran95/framgia-demo-server">
              Source code server
            </a>
            : Sử dụng Express, Firebase SDK, Google Cloud Storage SDK,
            formidable, imagemin
          </h5>
          <p className="lead">
            <strong>
              <i>
                ** Hướng dẫn chạy offline ở README trên github source code
                client - Mở project bằng Google Chrome
              </i>
            </strong>
          </p>
          <a href="#" className="btn btn-primary btn-lg">
            Link video trình bày demo
          </a>
        </header>
      </div>
    );
  }
}

export default Intro;
