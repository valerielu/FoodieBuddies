import React from "react";
import GreetingContainer from "./greeting_container.jsx";
import Nav from "./nav.jsx";
import { Link } from 'react-router';
import {withRouter} from 'react-router';

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.handleLogo = this.handleLogo.bind(this);
  }

  handleLogo() {
    this.props.router.push("/");
  }

  render () {
    return (
      <header>
        <div className="header-container">
          <a className="header-logo-anchor" onClick={this.handleLogo}>
            <img src="http://res.cloudinary.com/dsj48uswp/image/upload/v1473372653/logo-white-cropped_fx0oy2.png" className="header-logo-img"/>
          </a>
          <div className="header-links-container">
            <i className="fa fa-building" aria-hidden="true"></i>
            <Link className="header-link" to="/cities">Cities</Link>

            <i className="fa fa-users" aria-hidden="true"></i>
            <Link className="header-link" to="/hosting">Hosting</Link>
            <Nav currentUser={this.props.currentUser}/>
            <GreetingContainer />
          </div>
        </div>
      </header>
    );
  }
}



export default withRouter(Header);
