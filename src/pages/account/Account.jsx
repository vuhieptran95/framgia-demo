import React, { Component } from "react";
import AccountSignUpLogin from "./AccountSignUpLogin";
import { Authen } from "./../../config/FirebaseConfig";
import AccountProfile from "./AccountProfile";
import Authenticate from "../../authentication/Authenticate";
import AccountPermissionForm from "./AccountPermissionForm";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginUser: null
    };
  }

  async componentDidMount() {
    Authenticate.Authenticate(this);
  }

  handleLogOut() {
    Authen.signOut();
  }
  render() {
    return (
      <div className="container">
        {this.state.loginUser == null ? (
          <AccountSignUpLogin loginUser={this.state.loginUser} />
        ) : (
          <AccountProfile
            handleLogOut={() => this.handleLogOut()}
            loginUser={this.state.loginUser}
          >
            <AccountPermissionForm loginUser={this.state.loginUser} />
          </AccountProfile>
        )}
      </div>
    );
  }
}

export default Account;
