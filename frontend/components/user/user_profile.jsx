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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFields = this.updateFields.bind(this);
    this.handleAddPhoto = this.handleAddPhoto.bind(this);
    this.state = {
      first_name: this.props.currentUser.first_name,
      profile_pic_url: this.props.currentUser.profile_pic_url,
      profile: this.props.currentUser.profile,
      modalOpen: false
    };
  }

  componentWillMount() {
    this.props.receiveErrors();
  }
  //
  // componentDidUpdate() {
  //   if (this.props.currentUser.is_host) {
  //     this.props.router.push("/dashboard");
  //   }
  // }

  handleDelete() {
    this.closeModal();
    this.props.deleteAccount(this.props.currentUser);

  }

  handleAddPhoto() {

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUser(this.state, this.props.currentUser);
  }

  updateFields (property) {
    return (e) => {
      this.setState({[property]: e.target.value});
    };
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

  render () {
    let hostStatus;
    let hostButtontext;
    let hostUpdateForm;

    if (this.props.currentUser) {
      hostStatus = this.props.currentUser.is_host ? "You are a host (yay!) Host an event for your city!" : "You are not yet a host";
      hostButtontext = this.props.currentUser.is_host ? "Create event" : "Become a host";
    }

    if (this.props.currentUser.is_host) {
      hostUpdateForm =
      (
        <div className="new-host-form-container">
          <h1 className="new-host-form-title">Update your host profile</h1>

          <ul className="host-form-errors">
            {errors}
          </ul>

          <form onSubmit={this.handleSubmit} className="new-host-form">
            <div className="form-input-container">
              <input className="form-firstname-input" type="text" onChange={this.updateFields("first_name")} value={this.state.first_name} />

            </div>

            <div className="form-input-container">
              <button className="create-event-button" onClick={this.handleAddPhoto}><i className="fa fa-camera" aria-hidden="true"></i> Change profile photo</button>
            </div>

            <div className="form-input-container">
              <textarea className="form-profile-input" onChange={this.updateFields("profile")} value={this.state.profile}></textarea>
            </div>

            <input className="create-host-button" type="submit" value="Update Profile" />
          </form>

        </div>
      );
    } else {
      hostUpdateForm = (
        <div></div>
      );
    }

    let errors;
    if (this.props.errors) {
      errors = this.props.errors.map((error, idx) => (
        <li key={idx}>{error}</li>
      ));
    } else {
      errors = [];
    }

    const style = {
      overlay : {
        position        : 'fixed',
        top             : 0,
        left            : 0,
        right           : 0,
        bottom          : 0,
        backgroundColor : 'rgba(255, 255, 255, 0.7)',
        zIndex          : 10
      },
      content : {
        position        : 'fixed',
        top             : '200px',
        left            : '200px',
        right           : '200px',
        bottom          : '200px',
        border          : '2px solid #4ABDAC',
        boxShadow       : '0 0 10px #909090',
        padding         : '25px',
        zIndex          : 11,
        display         : 'flex',
        flexDirection   : 'column',
        justifyContent  : 'center',
        backgroundColor : '#faf6e8'
      }
    };

    return (
      <div className="user-profile-container">
        <div className="host-status-container">
          <h1 className="host-status-text">HOST STATUS: {hostStatus}</h1>
          <button className="host-button" onClick={this.handleHost}>{hostButtontext}</button>
        </div>

        <ul className="host-form-errors">
          {errors}
        </ul>
        {hostUpdateForm}

        <div className="delete-container">
          <h1 className="host-status-text">Delete my account</h1>
          <button className="delete-button" onClick={this.openModal} >Delete account</button>
        </div>

        <Modal

          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}

          style={style} >
          <i className="fa fa-times" aria-hidden="true" onClick={this.closeModal}></i>
          <div className="delete-modal-container">
            <div className="delete-account-text-container">
              <h1 className="delete-account-title">Are you sure you want to delete your account?</h1>
              <h1 className="delete-account-tagline">We will be very very sad</h1>
            </div>
            <div className="delete-account-choices">
              <button className="delete-confirm-button" onClick={this.handleDelete}>Yes</button>
              <button className="cancel-button" onClick={this.closeModal}>cancel</button>
            </div>
          </div>
        </Modal>

      </div>
    );
  }
}


export default withRouter(UserProfile);
