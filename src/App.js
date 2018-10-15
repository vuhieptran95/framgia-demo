import React, { Component } from "react";
import Nav from "./shared/Nav";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HomeContent from "./pages/home/HomeContent";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" component={HomeContent} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
