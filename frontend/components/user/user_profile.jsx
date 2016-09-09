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
    this.handleDeletePhoto = this.handleDeletePhoto.bind(this);
    this.handleViewEvent = this.handleViewEvent.bind(this);
    this.handleViewProfile = this.handleViewProfile.bind(this);
    this.state = {
      first_name: this.props.currentUser.first_name,
      profile_pic_url: this.props.currentUser.profile_pic_url,
      profile: this.props.currentUser.profile,
      modalOpen: false
    };
    this.updateMessage = (<div></div>);
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  componentWillReceiveProps(nextProps) {
    let nextProfile = nextProps.currentUser.profile;
    let thisProfile = this.props.currentUser.profile;
    let nextName = nextProps.currentUser.first_name;
    let thisName = this.props.currentUser.first_name;
    let nextUrl = nextProps.currentUser.profile_pic_url;
    let thisUrl = this.props.currentUser.profile_pic_url;

    this.updateMessage = (<div></div>);

    if ((nextProfile !== thisProfile || nextName !== thisName || nextUrl !== thisUrl) && (nextProps.errors.length === 0)) {
      this.updateMessage =
      (<h1 className="host-status-update-feedback">
      <i className="fa fa-check" aria-hidden="true"></i> Profile saved!</h1>);
    }
  }

  handleDelete() {
    this.closeModal();
    this.props.deleteAccount(this.props.currentUser);

  }

  handleViewEvent() {
    this.props.router.push(`/cities/${this.props.currentUser.city_id}`);
  }

  handleViewProfile() {
    this.props.router.push(`/cities/${this.props.currentUser.city_id}/hosts/${this.props.currentUser.id}`);
  }

  handleAddPhoto(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options, (error, images) => {
        if (error === null) {
          this.setState({profile_pic_url: images[0].url});
        }
    });
  }

  handleDeletePhoto() {
    this.setState({profile_pic_url: ""});
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

    let profileThumbnailClass, thumbnailXClass;
    if (!this.state.profile_pic_url || this.state.profile_pic_url.length === 0) {
      profileThumbnailClass = "hide-profile-pic-thumbnail";
      thumbnailXClass = "fa fa-times hide-thumbnail-x";
    } else {
      profileThumbnailClass = "profile-pic-thumbnail";
      thumbnailXClass = "fa fa-times thumbnail-x";
    }

    let errors;
    if (this.props.errors) {
      errors = this.props.errors.map((error, idx) => (
        <li key={idx}>{error}</li>
      ));
    } else {
      errors = [];
    }

    // let hostStatus, hostTagline, hostButtontext, hostUpdateForm, viewEventsButton, hostProfileButton, hostUpdateForm;

      const hostStatus = this.props.currentUser.is_host ? `You are a host for ${this.props.currentUser.city_name} (yay!)` : `You are not yet a host`;
      const hostTagline = this.props.currentUser.is_host ? (<h1 className="host-tagline-text">Host an event!</h1>) : (<div></div>);
      const hostButtontext = this.props.currentUser.is_host ? "Create event" : "Become a host";
      const hostProfileButton = this.props.currentUser.is_host ? (<button className="view-event-button" onClick={this.handleViewProfile}>View my profile</button>) : (<div></div>);
      const viewEventsButton = this.props.currentUser.is_host ? (<button className="view-event-button" onClick={this.handleViewEvent}>See all events</button>) : (<div></div>);
      const hostUpdateForm = this.props.currentUser.is_host ?

      (
        <div className="new-host-form-container">
          <h1 className="update-host-form-title">Update your host profile</h1>

          <form onSubmit={this.handleSubmit} className="new-host-form">
            <div className="form-input-container">
              <h1 className="form-label">First name</h1>
              <input className="form-firstname-input" type="text" onChange={this.updateFields("first_name")} value={this.state.first_name} />

            </div>

            <div className="form-input-image-container">
              <button className="upload-picture-button" onClick={this.handleAddPhoto}><i className="fa fa-camera" aria-hidden="true"></i> Change profile photo</button>
              <img className={profileThumbnailClass} src={this.state.profile_pic_url} />
              <i className={thumbnailXClass} aria-hidden="true" onClick={this.handleDeletePhoto}></i>
            </div>

            <div className="form-input-container">
              <h1 className="form-label">Profile (Your introduction)</h1>
              <textarea className="form-profile-input" onChange={this.updateFields("profile")} value={this.state.profile}></textarea>
            </div>

            <ul className="login-errors">
              {errors}
            </ul>

            <input className="submit-host-button" type="submit" value="Update Profile" />
            {this.updateMessage}
          </form>

        </div>
      )
      : (<div></div>);


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
          <div className = "host-status-text-and-button">
            <h1 className="host-status-text">HOST STATUS: {hostStatus}</h1>
            {hostProfileButton}
          </div>
          {hostTagline}
          <div className="host-profile-buttons-container">
            <button className="host-button" onClick={this.handleHost}>{hostButtontext}</button>
            {viewEventsButton}
          </div>
        </div>

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
