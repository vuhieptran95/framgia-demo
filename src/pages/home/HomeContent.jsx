import React, { Component } from "react";
import HomeContentHeader from "./HomeContentHeader";
import Db, { Authen } from "./../../config/FirebaseConfig";
import HomeContentUsers from "./HomeContentUsers";
import HomeContentHeaderAddNew from "./HomeContentHeaderAddNew";
import Footer from "./../../shared/Footer";
import Intro from "./../Intro";
import Authorize from "./../../authorization/Authorize";
import Authenticate from "../../authentication/Authenticate";

class HomeContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loginUser: null
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

    Authenticate.Authenticate(this);
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
