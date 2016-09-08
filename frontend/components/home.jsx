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
    } else {
      const _stringGen = (len) => {
        let randomWord = "";

        var charset = "0123456789"; //abcdefghijklmnopqrstuvwxyz

        for (let i = 0; i < len; i++ )
            randomWord += charset.charAt(Math.floor(Math.random() * charset.length));

        return randomWord;
      };

      let hostStatus = (Math.random() <= 0.5) ? true : false;
      let city_id = Math.floor(Math.random()*6) + 1;
      let userName = `Guest${_stringGen(5)}`;

      if (hostStatus) {
        this.props.signup({
          username: userName,
          password: "password",
          is_host: hostStatus,
          first_name: userName,
          city_id: city_id,
          profile: "Guest user profile"
        });
      } else {
        this.props.signup({
          username: `GuestUser${_stringGen(length)}`,
          password: "password",
          is_host: hostStatus
        });
      }
    }
  }

  render () {
    const joinButton = "Let's get food!";
    return (
      <div className="home-container">

        <div className="home-welcome-container">

          <div className="home-background"></div>
          <div className="home-text-container">
            <h1 className="home-title">Food is better with company</h1>
            <h1 className="home-tagline">An app for traveling foodies to meet local foodies</h1>

            <div className="home-welcome-buttons-container">
              <button className="home-signup-button" onClick={this.handleSignUp}>{joinButton}</button>
              <button className="demo-button" onClick={this.handleDemo}>Guest Login</button>
            </div>
          </div>
        </div>

        <div className="home-content-container">

          <h1 className="home-content-title">Why do people love foodiebuddies?</h1>

          <div className="home-content-box">
            <img src="" alt=""/>
            <h2 className="content-box-title">Because the more the merrier</h2>
          </div>

          <div className="home-content-box">
            <h2 className="content-box-title">Because friends who eat together stay together</h2>
            <img src="" alt=""/>
          </div>

        </div>
      </div>

    );
  }
}

export default withRouter(Home);
