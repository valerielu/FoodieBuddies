import React from "react";
import { Link } from 'react-router';
import {withRouter} from "react-router";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout();
    console.log("gonna redirect to root!");
    this.props.router.push("/");
  }

  render () {
    if (this.props.currentUser) {
      return (
        <div className="header-greeting-container">
          <span className="welcome-text"> Welcome, {this.props.currentUser.username}!</span>
          <button className="logout-button" onClick={this.handleLogout}>Log Out</button>
        </div>
      );

    } else {
      return (
        <div className="header-greeting-container">
          <Link className="login-link" to="/login">Login</Link>
          <Link className="signup-link" to="/signup">Sign up</Link>
        </div>
      );
    }
  }
}

export default withRouter(Greeting);
