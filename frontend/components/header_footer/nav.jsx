import React from "react";
import { Link } from 'react-router';
import {withRouter} from "react-router";

class Nav extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    if (this.props.currentUser) {
      return (
        <nav className="header-nav-container">
          <Link className="header-nav-link" to="/dashboard">Dashboard</Link>
          <Link className="header-nav-link" to="/userprofile">Account</Link>
        </nav>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default withRouter(Nav);
