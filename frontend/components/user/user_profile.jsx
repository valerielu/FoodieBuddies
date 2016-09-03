import React from "react";
import { Link } from 'react-router';
import {withRouter} from "react-router";
import Modal from "react-modal";

class UserProfile extends React.Component{
  constructor(props) {
    super(props);
    this.handleHost = this.handleHost.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {modalOpen: false};
  }

  handleDelete() {
    this.closeModal();
    this.props.deleteAccount(this.props.currentUser);

  }

  handleHost() {
    if (this.props.currentUser.is_host) {
      this.props.router.push("/events/new");
    } else {
      this.props.router.push("/hosting");
    }
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }
  openModal() {
    this.setState({ modalOpen: true });
  }

  // <h1 className="delete-text">We are sad to see you go!</h1>

  render () {
    let hostStatus;
    let hostButtontext;
    if (this.props.currentUser) {

      hostStatus = this.props.currentUser.is_host ? "You are a host (yay!)" : "You are not yet a host";
      hostButtontext = this.props.currentUser.is_host ? "Host an event!" : "Become a host";
    }


    const style = {
      overlay : {
        position        : 'fixed',
        top             : 0,
        left            : 0,
        right           : 0,
        bottom          : 0,
        backgroundColor : 'rgba(0, 0, 0, 0.5)',
        zIndex        : 10
      },
      content : {
        position        : 'fixed',
        top             : '200px',
        left            : '200px',
        right           : '200px',
        bottom          : '200px',
        border          : '2px solid #4ABDAC',
        boxShadow      : '0 0 5px #909090',
        padding         : '40px',
        zIndex         : 11,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#faf6e8'
      }
    };

    return (
      <div className="user-profile-container">
        <div className="host-status-container">
          <h1 className="host-status-text">HOST STATUS: {hostStatus}</h1>
          <button className="host-button" onClick={this.handleHost}>{hostButtontext}</button>
        </div>
        <div className="delete-container">
          <button className="delete-button" onClick={this.openModal} >Delete account</button>
        </div>

        <Modal

          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={style} >

          <i className="fa fa-times" aria-hidden="true" onClick={this.closeModal}></i>
          <h2>Are you sure you want to delete your account?</h2>
          <p>We will be very very sad</p>
          <button className="delete-button" onClick={this.closeModal}>cancel</button>
          <button className="delete-button" onClick={this.handleDelete}>Yes</button>
        </Modal>

      </div>
    );
  }
}


export default withRouter(UserProfile);
