import React, { Component } from "react";
import "./css/AccountPermissionForm.css";
import Functions from "../../authorization/Functions";
import Db from "../../config/FirebaseConfig";
import AccountWrap from "./AccountWrap";

class AccountPermissionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: props.loginUser.role,
      isProcessing: false
    };
  }

  handleInputChange(event) {
    var role;
    const target = event.target;
    if (target.checked) {
      role = this.state.role.filter(item => item !== null);
      role.push(target.value);
      if (
        target.value == Functions.EDIT_USER ||
        target.value == Functions.DELETE_USER
      ) {
        role.push(Functions.VIEW_USER_DETAILS);
      }
    } else {
      role = this.state.role.filter(item => item !== null);
      if (target.value == Functions.VIEW_USER_DETAILS) {
        role = role.filter(item => item !== Functions.EDIT_USER);
        role = role.filter(item => item !== Functions.DELETE_USER);
      }
      role = role.filter(item => item !== target.value);
    }
    this.setState({
      role: role
    });
  }

  async handlePermissionEdit() {
    this.setState({ isProcessing: !this.state.isProcessing });
    await Db.collection("authen-users")
      .doc(this.props.loginUser.id)
      .update({ role: this.state.role });
    this.setState({ isProcessing: !this.state.isProcessing });
  }

  render() {
    return (
      <AccountWrap isProcessing={this.state.isProcessing}>
        <div>
          <div className="margin-top-30">
            <label className="customcheck">
              View User Details
              <input
                name={Functions.VIEW_USER_DETAILS}
                value={Functions.VIEW_USER_DETAILS}
                type="checkbox"
                checked={
                  this.state.role.includes(Functions.VIEW_USER_DETAILS)
                    ? true
                    : false
                }
                onChange={event => this.handleInputChange(event)}
              />
              <span className="checkmark" />
            </label>
            <label className="customcheck">
              Add New User
              <input
                name={Functions.ADD_NEW_USER}
                value={Functions.ADD_NEW_USER}
                type="checkbox"
                checked={
                  this.state.role.includes(Functions.ADD_NEW_USER)
                    ? true
                    : false
                }
                onChange={event => this.handleInputChange(event)}
              />
              <span className="checkmark" />
            </label>
            <label className="customcheck">
              Edit User - <h6>Require View User Detail</h6>
              <input
                name={Functions.EDIT_USER}
                value={Functions.EDIT_USER}
                type="checkbox"
                checked={
                  this.state.role.includes(Functions.EDIT_USER) ? true : false
                }
                onChange={event => this.handleInputChange(event)}
              />
              <span className="checkmark" />
            </label>
            <label className="customcheck">
              Delete User - <h6>Require View User Detail</h6>
              <input
                name={Functions.DELETE_USER}
                value={Functions.DELETE_USER}
                type="checkbox"
                checked={
                  this.state.role.includes(Functions.DELETE_USER) ? true : false
                }
                onChange={event => this.handleInputChange(event)}
              />
              <span className="checkmark" />
            </label>
            <button
              onClick={() => this.handlePermissionEdit()}
              className="btn btn-success"
            >
              Save changes
            </button>
          </div>
        </div>
      </AccountWrap>
    );
  }
}

export default AccountPermissionForm;
