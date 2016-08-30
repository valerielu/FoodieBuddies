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
    const buttonDisplay = (this.props.formType) === 'login' ? "Log In" : "Sign Up";
    const otherForm = (this.props.formType) === 'login' ? "/signup" : "/login";
    const errors = this.props.errors.map((error, idx) => (
      <li key={idx}>{error}</li>
    ));

    const phrase = (this.props.formType) === 'login' ? "Not yet a user?" : "Already a user?";
    return (
      <div className="login-form-container">
        <h3>Welcome!</h3>

        <ul className="login-errors">
          {errors}
        </ul>

        <form onSubmit={this.handleSubmit} className="login-form">

          <label className="login-label">Username
            <input type="text" onChange={this.updateFields("username")} value={this.state.username} className="login-input"/>
          </label>
          <label className="login-label">Password
            <input type="text" onChange={this.updateFields("password")}/>
          </label>

          <input type="submit" value={buttonDisplay}/>
        </form>

        {phrase}
        <Link to={otherForm}>{otherForm.slice(1).toUpperCase()}</Link>

      </div>
    );
  }
}

export default withRouter(SessionForm);
