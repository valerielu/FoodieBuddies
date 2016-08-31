import React from "react";
import {withRouter} from "react-router";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleSignUp() {
    if (this.props.currentUser) {
      this.props.router.push("/cities");
    } else {
      this.props.router.push("/signup");
    }
  }

  handleDemo() {
    if (this.props.currentUser) {
      this.props.router.push("/cities");
    }
  }

  render () {
    const joinButton = "Let's get food!";
    return (
      <div className="home-container">

        <div className="home-welcome-container">
          <div className="home-background"></div>
          <h1 className="home-title">Food is better with company</h1>
          <h1 className="home-tagline">Meet local foodies and try a new restaurant together!</h1>
          <div className="home-welcome-buttons">
            <button className="signup-button" onClick={this.handleSignUp}>{joinButton}</button>
            <button className="demo-button" onClick={this.handleDemo}>Guest Login</button>
          </div>
        </div>
        <div className="home-content-container">
          <h1 className="home-content-title">Why do it?</h1>
          <div className="home-content-box">
            <img src="./gaeg" alt=""/>
            <h2 className="content-box-title">Because the more the merrier</h2>
          </div>
          <div className="home-content-box">
            <h2 className="content-box-title">Because friends who eat together stay together</h2>
            <img src="./gaeg" alt=""/>
          </div>
        </div>
      </div>

    );
  }
}

export default withRouter(Home);
