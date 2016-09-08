import React from "react";
import {withRouter} from "react-router";
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFields = this.updateFields.bind(this);
    this.handleOtherLink = this.handleOtherLink.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentDidUpdate(){
    if (this.props.loggedIn){
			this.props.router.push("/");
		}
  }

  updateFields (property) {
    return (e) => {
      this.setState({[property]: e.target.value});
    };
  }

  handleOtherLink(otherForm) {
    this.props.router.push(otherForm);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  handleDemo() {
    const _stringGen = (len) => {
      let randomWord = "";

      var charset = "0123456789"; //abcdefghijklmnopqrstuvwxyz

      for (let i = 0; i < len; i++ )
          randomWord += charset.charAt(Math.floor(Math.random() * charset.length));

      return randomWord;
    };

    // let lengthRange = [4, 5, 6];
    // let length = lengthRange[Math.floor(Math.random() * lengthRange.length)];
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

  render () {
    const buttonDisplay = (this.props.formType) === 'login' ? "LOG IN" : "SIGN UP";

    const otherForm = (this.props.formType) === 'login' ? "signup" : "login";

    const errors = this.props.errors.map((error, idx) => (
      <li key={idx}>{error}</li>
    ));

    const phrase = (this.props.formType) === 'login' ? "Not yet a user?" : "Already a user?";
    const welcome = (this.props.formType) === 'login' ? "Welcome back!" : "Join us!";
    return (
      <div className="login-form-container">
        <p className="login-greeting">{welcome}</p>

        <ul className="login-errors">
          {errors}
        </ul>

        <form onSubmit={this.handleSubmit} className="login-form">
          <div className="input-container">
            <div className="username-addon">
              <span className="input-group-addon"><i className="fa fa-user" aria-hidden="true"></i></span>
            </div>
            <input type="text" onChange={this.updateFields("username")} value={this.state.username} className="login-input" placeholder="Username"/>
          </div>
          <div className="input-container">
            <div className="password-addon">
              <span className="input-group-addon"><i className="fa fa-key fa-fw" aria-hidden="true"></i></span>
            </div>
            <input type="password" onChange={this.updateFields("password")} value={this.state.password} className="login-input" placeholder="Password (at least 6 characters)"/>
          </div>
          <input type="submit" value={buttonDisplay} className="login-button"/>
        </form>
        <div className="login-choices">
          <div className="login-alternative1">
            <span className="login-phrase">{phrase}</span>
            <button className="other-button" onClick={this.handleOtherLink.bind(this, otherForm)}>{otherForm}</button>
          </div>
          <div className="login-alternative2">
            <span className="login-phrase">Not ready to sign up?</span>
            <button className="tour-button" onClick={this.handleDemo}>TAKE A TOUR</button>
          </div>
        </div>
        <div className="arrow bounce">

        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
