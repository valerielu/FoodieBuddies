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

          <i className="fa fa-tachometer" aria-hidden="true"></i>
          <Link className="header-nav-link" to="/dashboard">Dashboard</Link>
          <i className="fa fa-cog" aria-hidden="true"></i>
          <Link className="header-nav-link" to="/useraccount">Account</Link>
        </nav>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default withRouter(Nav);
