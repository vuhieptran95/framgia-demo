import React, { Component } from "react";
import AccountSignUpLogin from "./AccountSignUpLogin";
import { Authen } from "./../../config/FirebaseConfig";
import AccountProfile from "./AccountProfile";
import Authenticate from "../../authentication/Authenticate";
import AccountPermissionForm from "./AccountPermissionForm";
import Db from "../../config/FirebaseConfig";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginUser: null,
      listUsers: null
    };
  }

  async componentDidMount() {
    Authenticate.Authenticate(this);
    Db.collection("authen-users")
      .orderBy("dateCreated", "desc")
      .onSnapshot(users => {
        var listUsers = [];
        users.forEach(user => listUsers.push(user.data()));
        this.setState({ listUsers: listUsers });
      });
  }

  handleLogOut() {
    Authen.signOut();
  }
  render() {
    return (
      <div className="container">
        {this.state.loginUser == null ? (
          <div>
            <AccountSignUpLogin loginUser={this.state.loginUser} />
            <div>
              <h4>Danh sách các users hiện tại:</h4>
              <ul>
                {this.state.listUsers &&
                  this.state.listUsers.map(user => (
                    <li key={user.email}>{user.email}</li>
                  ))}
                <li className="margin-top-50">Default password: hahaha</li>
              </ul>
            </div>
          </div>
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
