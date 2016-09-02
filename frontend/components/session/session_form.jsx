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
    this.otherForm = (this.props.formType) === 'login' ? "/signup" : "/login";
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

  handleOtherLink() {
    this.props.router.push(this.otherForm);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  handleDemo() {
    this.props.login({
      username: "JaneDoe",
      password: "testing"
    });
  }

  render () {
    const buttonDisplay = (this.props.formType) === 'login' ? "LOG IN" : "SIGN UP";

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
            <button className="other-button" onClick={this.handleOtherLink}>{this.otherForm.slice(1)}</button>
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
