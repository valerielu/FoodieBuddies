import React from "react";
import GreetingContainer from "./greeting_container.jsx";
import NavContainer from "./nav_container.jsx";
import { Link } from 'react-router';

class Header extends React.Component{
  constructor(props) {
    super(props);
  }

  render () {


    return (
      <header>
        <div className="header-container">
          <a href="/" className="header-logo-anchor">
            <img src="./logo-white.png" className="header-logo-img"/>
          </a>
          <div className="header-links-container">
            <Link className="header-link" to="/cities">Cities</Link>
            <Link className="header-link" to="/hosting">Hosting</Link>
            <NavContainer />
            <GreetingContainer />
          </div>
        </div>
      </header>
    );
  }
}



export default Header;
