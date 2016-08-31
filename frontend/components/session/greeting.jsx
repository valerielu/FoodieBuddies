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
        <div>
          Welcome!
          {this.props.currentUser.username}
          <button className="logout-button" onClick={this.handleLogout}>Log Out</button>
        </div>
      );

    } else {
      return (
        <nav>
          <Link to="/login">Login</Link>
          &nbsp;or&nbsp;
          <Link to="/signup">Sign up!</Link>
        </nav>
      );
    }
  }
}

export default withRouter(Greeting);
