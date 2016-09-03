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
  }

  // componentDidUpdate(){
  //   if (this.props.loggedIn){
	// 		this.props.router.push("/");
	// 	}
  // }

  updateFields (property) {
    return (e) => {
      this.setState({[property]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.processForm(this.state);
  }
  //
  // #  is_host         :boolean          default(FALSE)
  // #  profile         :text
  // #  profile_pic_url :string
  // #  city_id

//   <p className="login-greeting">{welcome}</p>
//
//   <form onSubmit={this.handleSubmit} className="login-form">
//     <div className="input-container">
//       <div className="username-addon">
//         <span className="input-group-addon"><i className="fa fa-user" aria-hidden="true"></i></span>
//       </div>
//       <input type="text" onChange={this.updateFields("username")} value={this.state.username} className="login-input" placeholder="Username"/>
//     </div>
//     <div className="input-container">
//       <div className="password-addon">
//         <span className="input-group-addon"><i className="fa fa-key fa-fw" aria-hidden="true"></i></span>
//       </div>
//       <input type="password" onChange={this.updateFields("password")} value={this.state.password} className="login-input" placeholder="Password (at least 6 characters)"/>
//     </div>
//     <input type="submit" value={buttonDisplay} className="login-button"/>
//   </form>
//
// </div>

  render () {

    return (
      <div className="login-form-container">
        form is here
      </div>
    );
  }
}

export default withRouter(SessionForm);
