import React, { Component } from "react";
import HomeContentHeader from "./HomeContentHeader";
import Modal from "./../../shared/Modal";
import Db from "./../../config/FirebaseConfig";
import { UserService } from "./../../services/UserServices";
import HomeContentUsers from "./HomeContentUsers";
import HomeContentHeaderAddNew from "./HomeContentHeaderAddNew";
import Footer from "./../../shared/Footer";
import Intro from "./../Intro";

class HomeContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  async componentDidMount() {
    Db.collection("users")
      .orderBy("dateCreated", "desc")
      .onSnapshot(docs => {
        var users = [];
        docs.forEach(doc => users.push({ username: doc.id, ...doc.data() }));
        this.setState({ users: users });
      });
  }

  render() {
    return (
      <div>
        <div className="container">
          <Intro />
          <HomeContentHeader>
            <HomeContentHeaderAddNew />
          </HomeContentHeader>
          <HomeContentUsers users={this.state.users} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomeContent;
