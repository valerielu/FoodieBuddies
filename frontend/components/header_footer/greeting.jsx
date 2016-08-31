import React from "react";
import { Link } from 'react-router';
import {withRouter} from "react-router";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleLogout() {
    this.props.logout();
    this.props.router.push("/");
  }

  handleSignUp() {
    this.props.router.push("/signup");
  }


  // <Link className="-link" to="/signup">Sign up</Link>

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
          <button className="signup-button" onClick={this.handleSignUp}>Sign Up</button>
        </div>
      );
    }
  }
}

export default withRouter(Greeting);
