import React, { Component } from "react";
import Modal from "./Modal";
import Axios from "axios";
import { cloneDeep } from "lodash";
import DisplayMessage from "../helper/Message";
import Db from "../config/FirebaseConfig";
import Authorize from "../authorization/Authorize";

class ModalAddNewEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      srcImage: props.user ? props.user.profileImage : null,
      isProcessing: false,
      message: null,
      user: props.user ? props.user : {}
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

  async handleEdit(event) {
    this.setState({ isProcessing: true });
    event.preventDefault();
    var form = new FormData(
      document.getElementById("editForm-" + this.props.user.username)
    );
    await Axios.put("http://localhost:6001/users", form)
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
    this.setState({ isProcessing: false, srcImage: null });
  }

  async handleAddNew(event) {
    this.setState({ isProcessing: true });
    event.preventDefault();
    var form = new FormData(document.getElementById("addNew"));
    await Axios.post("http://localhost:6001/users", form)
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
    this.setState({ isProcessing: false, srcImage: null });
  }

  async handleDelete(event) {
    if (
      window.confirm(
        `Do you really want to delete user ${this.props.user.username} ?`
      )
    ) {
      Db.collection("users")
        .doc(this.props.user.username)
        .delete();
    }
  }

  render() {
    return (
      <Modal
        isProcessing={this.state.isProcessing}
        id={this.props.id}
        title={this.props.title}
      >
        <form
          id={
            this.props.isAddNew
              ? "addNew"
              : "editForm-" + this.props.user.username
          }
          method={this.props.isAddNew ? "POST" : "PUT"}
          encType="multipart/form-data"
        >
          <div className="row">
            <div className="col-lg-7">
              <div className="form-group">
                <label htmlFor="username">User name</label>
                <input
                  hidden={!this.props.isAddNew}
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={this.state.user.username}
                  onChange={event => this.handleTextChange(event)}
                  placeholder="Choose a user name"
                />
                <h5 hidden={this.props.isAddNew}>{this.state.user.username}</h5>
              </div>
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
              <button
                type="submit"
                hidden={!this.props.isAddNew}
                onClick={event => this.handleAddNew(event)}
                className="btn btn-primary btn-lg"
              >
                Add new
              </button>
              <button
                type="submit"
                hidden={this.props.isAddNew}
                className="btn btn-primary btn-lg"
                onClick={event => this.handleEdit(event)}
              >
                Save changes
              </button>
              {Authorize.hasRoleDelete(this.props.loginUser) && (
                <button
                  data-dismiss="modal"
                  className="btn btn-lg btn-danger margin-left-15"
                  hidden={this.props.isAddNew}
                  onClick={event => this.handleDelete(event)}
                >
                  Delete user
                </button>
              )}
            </div>
            <div className="col-lg-4">
              <input
                type="file"
                onChange={event => this.handleFileChange(event)}
                name="profileImage"
              />
            </div>
          </div>
          <input
            type="text"
            name="profileImage"
            hidden={true}
            defaultValue={this.state.user.profileImage}
          />
        </form>
      </Modal>
    );
  }
}

export default ModalAddNewEdit;
