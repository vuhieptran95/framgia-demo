import React, { Component } from "react";
import { DisplayError } from "./../../helper/Message";
import Db, { Authen } from "./../../config/FirebaseConfig";
import Functions from "../../authorization/Functions";
import AccountWrap from "./AccountWrap";

class AccountSignUpLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignUp: false,
      error: "",
      isProcessing: false
    };
  }

  handleSwitch(event) {
    event.preventDefault();
    this.setState({ isSignUp: !this.state.isSignUp });
  }

  handleTextChange(event) {
    var value = event.target.value;
    var name = event.target.name;
    this.setState({ [name]: value });
  }

  async handleSignUp(event) {
    this.setState({ isProcessing: !this.state.isProcessing });
    event.preventDefault();
    var result = null;
    try {
      result = await Authen.createUserWithEmailAndPassword(
        this.state.email,
        this.state.password
      );
    } catch (error) {
      console.log(error);
      this.setState({ error: DisplayError(error) });
    }
    if (result) {
      await Db.collection("authen-users")
        .doc(result.user.uid)
        .set({
          role: [Functions.VIEW_USER_DETAILS],
          email: result.user.email,
          dateCreated: Date.now()
        });
    }
    this.setState({ isProcessing: !this.state.isProcessing });
  }

  async handleLogIn(event) {
    this.setState({ isProcessing: !this.state.isProcessing });
    event.preventDefault();
    var result = null;
    try {
      result = await Authen.signInWithEmailAndPassword(
        this.state.email,
        this.state.password
      );
      console.log(result.user);
    } catch (error) {
      console.log(error);
      this.setState({ error: DisplayError(error) });
    }
    this.setState({ isProcessing: !this.state.isProcessing });
  }

  render() {
    return (
      <AccountWrap isProcessing={this.state.isProcessing}>
        <div>
          <h3>{this.state.isSignUp ? "Sign up form" : "Log in form"}</h3>
          <form
            onSubmit={
              this.state.isSignUp
                ? event => this.handleSignUp(event)
                : event => this.handleLogIn(event)
            }
          >
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={this.state.email}
                onChange={event => this.handleTextChange(event)}
                required
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                //   type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={event => this.handleTextChange(event)}
                required
              />
            </div>
            <div className="form-group">{this.state.error}</div>
            <button type="submit" className="btn btn-primary">
              {this.state.isSignUp ? "Sign up" : "Log in"}
            </button>
            <button
              onClick={event => this.handleSwitch(event)}
              className="btn btn-default margin-left-15"
            >
              Switch to {!this.state.isSignUp ? <u>Sign up</u> : <u>Log in</u>}
            </button>
          </form>
        </div>
      </AccountWrap>
    );
  }
}

export default AccountSignUpLogin;
