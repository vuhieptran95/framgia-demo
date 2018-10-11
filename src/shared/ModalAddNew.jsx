import React, { Component } from "react";
import Modal from "./Modal";
import Axios from "axios";
import { cloneDeep } from "lodash";
import DisplayMessage from "./../helper/Message";

class ModalAddNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      srcImage: null,
      isProcessing: false,
      message: null,
      user: {}
    };
  }

  handleTextChange(event) {
    var newuser = cloneDeep(this.state.user);
    newuser[event.target.name] = event.target.value;
    this.setState({ user: newuser });
  }

  handleFileChange(event) {
    try {
      if (event.target.files[0]) {
        var fileReader = new FileReader();
        fileReader.readAsDataURL(event.target.files[0]);
        fileReader.onload = ev => {
          this.setState({ srcImage: ev.target.result });
        };
      }
    } catch (error) {
      console.log(error);
    }
  }

  async handleSubmit(event) {
    this.setState({ isProcessing: true });
    event.preventDefault();
    var form = new FormData(document.getElementById("myForm"));
    await Axios.post("http://localhost:6001/profileImage", form)
      .then(res => {
        this.setState({
          message: DisplayMessage(res.status, res.statusText, res.data)
        });
        console.log(res);
      })
      .catch(err => {
        if (err.response) {
          this.setState({
            message: DisplayMessage(
              err.response.status,
              err.response.statusText,
              err.response.data
            )
          });
        }
      });
    this.setState({ isProcessing: false });
  }

  render() {
    return (
      <Modal
        isProcessing={this.state.isProcessing}
        id={this.props.id}
        title={this.props.title}
      >
        <form
          id="myForm"
          method="post"
          action="http://localhost:6001/profileImage"
          encType="multipart/form-data"
          onSubmit={event => this.handleSubmit(event)}
        >
          <div className="row">
            <div className="col-lg-7">
              <div className="form-group">
                <label htmlFor="userFullName">Full name</label>
                <input
                  type="text"
                  className="form-control"
                  id="userFullName"
                  name="name"
                  value={this.state.user.name}
                  onChange={event => this.handleTextChange(event)}
                  placeholder="Enter your full name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="userEmail">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="userEmail"
                  name="email"
                  value={this.state.user.email}
                  onChange={event => this.handleTextChange(event)}
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">{this.state.message}</div>
            </div>
            <div className="col-lg-5">
              <div>
                <img
                  src={
                    !this.state.srcImage
                      ? "https://via.placeholder.com/350x250"
                      : this.state.srcImage
                  }
                  alt=""
                  style={{
                    paddingBottom: "10px",
                    maxHeight: "250px",
                    maxWidth: "350px"
                  }}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-7">
              <button type="submit" className="btn btn-primary btn-lg">
                Submit
              </button>
            </div>
            <div className="col-lg-4">
              <input
                type="file"
                onChange={event => this.handleFileChange(event)}
                name="profileImage"
              />
            </div>
          </div>
        </form>
      </Modal>
    );
  }
}

export default ModalAddNew;
