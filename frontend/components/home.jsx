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
          username: userName,
          password: "password",
          is_host: hostStatus
        });
      }
    }
  }

  render () {
    const joinButton = "Let's get food!";
    const guestButton = (this.props.currentUser) ?
    (<div></div>) : (<button className="demo-button" onClick={this.handleDemo}>Guest Login</button>);

    return (
      <div className="home-container">

        <div className="home-welcome-container">

          <div className="home-background"></div>
          <div className="home-text-container">
            <h1 className="home-title">Food is better with company</h1>
            <h1 className="home-tagline">An app for traveling foodies to meet local foodies</h1>

            <div className="home-welcome-buttons-container">
              <button className="home-signup-button" onClick={this.handleSignUp}>{joinButton}</button>
              {guestButton}
            </div>
          </div>
        </div>

        <div className="home-content-container">

          <h1 className="home-content-title">Why do people love foodiebuddies?</h1>

          <div className="home-content-box">
            <img className="homepage-image" src="https://res.cloudinary.com/dsj48uswp/image/upload/v1473368336/group_image_j9aoxf.png"/>
            <div className="content-text-container">
              <h2 className="content-box-title">Because eating alone is not as fun</h2>
                <p className="content-text">Everyone loves meeting new people and eating good food. Why not combine the two?
                Whether you are a visitor or local to the area, don't eat alone anymore - find foodie buddies near you and spread the joy!

                </p>
            </div>
          </div>

          <div className="home-content-box">
            <div className="content-text-container-2">
              <h2 className="content-box-title">Because sharing is caring</h2>
              <p className="content-text">Share delicious dishes. Share your stories. Share your favorite restaurants.
                No commitment - attend or unattend events with ease!
                If you love making these things happen, sign up to be a host!
              </p>
            </div>
            <img className="homepage-image" src="https://res.cloudinary.com/dsj48uswp/image/upload/v1473380031/highfive-e7a173c8a773070abd084deeac2eb53919a70990425599ed5e7164dc143d45c6_lpnfdp.png"/>
          </div>

        </div>
      </div>

    );
  }
}

export default withRouter(Home);
