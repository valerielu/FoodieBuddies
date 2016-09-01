import React from "react";
import { Link } from 'react-router';
import {withRouter} from "react-router";

class UserProfile extends React.Component{
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleHost = this.handleHost.bind(this);
  }

  handleDelete() {
    this.props.deleteAccount(this.props.currentUser);
  }

  handleHost() {
    if (this.props.currentUser.is_host) {
      this.props.router.push("/events/new");
    } else {
      this.props.router.push("/hosting");
    }
  }


  render () {
    const hostStatus = this.props.currentUser.is_host ? "You are a host (yay!)" : "You are not yet a host";
    const hostButtontext = this.props.currentUser.is_host ? "Host an event!" : "Become a host!";
    return (
      <div className="user-profile-container">
        <div className="host-status-container">
          <h1 className="host-status-text">HOST STATUS: {hostStatus}</h1>
          <button className="host-button" onClick={this.handleHost}>{hostButtontext}</button>
        </div>
        <div className="delete-container">
          <h1 className="delete-text">We are sad to see you go!</h1>
          <button className="delete-button" onClick={this.handleDelete}>Delete account</button>
        </div>
      </div>
    );
  }
}


export default withRouter(UserProfile);
