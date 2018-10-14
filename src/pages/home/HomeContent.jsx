import React, { Component } from "react";
import HomeContentHeader from "./HomeContentHeader";
import Modal from "./../../shared/Modal";
import Db from "./../../config/FirebaseConfig";
import { UserService } from "./../../services/UserServices";
import HomeContentUsers from "./HomeContentUsers";

class HomeContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  async componentDidMount() {
    Db.collection("users").onSnapshot(docs => {
      var users = [];
      docs.forEach(doc => users.push({ username: doc.id, ...doc.data() }));
      this.setState({ users: users });
    });
  }

  render() {
    return (
      <div className="container">
        <HomeContentHeader />
        <HomeContentUsers users={this.state.users} />
      </div>
    );
  }
}

export default HomeContent;
