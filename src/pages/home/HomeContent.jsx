import React, { Component } from "react";
import HomeContentHeader from "./HomeContentHeader";
import Modal from "./../../shared/Modal";
import Db from "./../../config/FirebaseConfig";
import { UserService } from "./../../services/UserServices";
import HomeContentUsers from "./HomeContentUsers";
import HomeContentHeaderAddNew from "./HomeContentHeaderAddNew";
import Footer from "./../../shared/Footer";
import Intro from "./../Intro";
import Authorize from "./../../authorization/Authorize";

class HomeContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loginUser: { username: "Hiep", role: ["addnew", "edit", "delete"] }
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
            {Authorize.hasRoleAddNew(this.state.loginUser) && (
              <HomeContentHeaderAddNew loginUser={this.state.loginUser} />
            )}
          </HomeContentHeader>
          <HomeContentUsers
            loginUser={this.state.loginUser}
            users={this.state.users}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomeContent;
