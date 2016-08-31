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

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  render () {
    const buttonDisplay = (this.props.formType) === 'login' ? "LOG IN" : "SIGN UP";
    const otherForm = (this.props.formType) === 'login' ? "/signup" : "/login";
    const errors = this.props.errors.map((error, idx) => (
      <li key={idx}>{error}</li>
    ));

    const phrase = (this.props.formType) === 'login' ? "Not yet a user?" : "Already a user?";
    const welcome = "Let's get food!";
    return (
      <div className="login-form-container">
        <p className="login-greeting">{welcome}</p>

        <ul className="login-errors">
          {errors}
        </ul>

        <form onSubmit={this.handleSubmit} className="login-form">
          <input type="text" onChange={this.updateFields("username")} value={this.state.username} className="login-input" placeholder="Username"/>
          <input type="text" onChange={this.updateFields("password")} value={this.state.password} className="login-input" placeholder="Password (at least 6 characters)"/>
          <input type="submit" value={buttonDisplay} className="login-button"/>
        </form>
        <div className="login-choices">
          <div className="login-alternative1">
            <span className="login-phrase">{phrase}</span>
            <Link className="other-button" to={otherForm}>{otherForm.slice(1).toUpperCase()}</Link>
          </div>
          <div className="login-alternative2">
            <span className="login-phrase">Not ready to sign up?</span>
            <input type="submit" value="TAKE A TOUR" className="tour-button"/>
          </div>
        </div>
        <div className="arrow bounce">

        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
