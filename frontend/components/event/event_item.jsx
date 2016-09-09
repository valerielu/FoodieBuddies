import React from "react";
import {withRouter} from "react-router";
import Modal from "react-modal";
import EventModalContainer from "./event_modal_container.jsx";
// import { Link } from 'react-router';
// <Link to="myRoute" params={myParams} target="_blank">

class EventItem extends React.Component{
  constructor(props) {
    super(props);
    this.handleJoinEvent = this.handleJoinEvent.bind(this);
    this.handleDropoutEvent = this.handleDropoutEvent.bind(this);
    this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
    this.handleHostClick = this.handleHostClick.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);
    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.state = {
      deleteModalOpen: false,
    };
  }

  handleJoinEvent() {
    this.props.attendEvent({user_id: this.props.currentUser.id, event_id: this.props.event.id});

  }

  handleDropoutEvent() {
    this.props.unattendEvent(this.props.event.id, this.props.currentUser.id);
    this.closeDeleteModal();
  }

  handleDeleteEvent() {
    this.props.deleteEvent(this.props.event.id);
    this.closeDeleteModal();
  }

  handleHostClick() {
    this.props.router.push(`/cities/${this.props.event.city_id}/hosts/${this.props.event.host_id}`);
  }

  closeDeleteModal() {
    this.setState({ deleteModalOpen: false });
  }

  openDeleteModal() {
    this.setState({ deleteModalOpen: true });
  }



  render() {
    let eventButton;
    if (this.props.event.host_id === this.props.currentUser.id) {
      eventButton = (<div></div>);
    } else if (this.props.event.attendees.includes(this.props.currentUser.id)) {

      eventButton = (<button className="join-event-button" onClick={this.openDeleteModal}>I changed my mind</button>);
    } else if (this.props.event.limit <= this.props.event.attendees.length) {
      eventButton = (<div></div>);
    } else {
      eventButton = (<button className="join-event-button" onClick={this.handleJoinEvent}>Sign me up!</button>);
    }

    let deleteButton, editButton;

    if (this.props.event.host_id === this.props.currentUser.id) {
      deleteButton = (<button className="delete-event-button" onClick={this.openDeleteModal}><i className="fa fa-trash-o" aria-hidden="true"></i></button>);
      editButton = (<EventModalContainer className="edit-event-button" event = {this.props.event} />);
    } else {
      deleteButton = (<div></div>);
      editButton = (<div></div>);
    }

    const seatsLeft = this.props.event.limit - this.props.event.attendees.length;

    let seatsclassName;
    if (seatsLeft > 0) {
      seatsclassName = "event-seats-left";
    } else {
      seatsclassName = "event-no-seats-left";
    }

    let Modalphrase;
    let ModalHandler;

    if (this.props.event.host_id === this.props.currentUser.id) {
      Modalphrase = "Are you sure you to want to delete this event?";
      ModalHandler = this.handleDeleteEvent;
    } else {
      Modalphrase = "Are you sure you to want UNattend this event?";
      ModalHandler = this.handleDropoutEvent;
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

    const prof_pic = (this.props.event.host_profile_pic_url) ? this.props.event.host_profile_pic_url : "https://robohash.org/autvoluptatemvoluptatum.png?size=250x250&set=set1";
    const yelp_link = (this.props.event.yelp_link && this.props.event.yelp_link.length > 0) ? this.props.event.yelp_link : undefined;

    return (
      <div className="event-item-with-button-container">
        <div className="event-item-container">


          <div className="event-right-container">
            <div className="event-host-container" onClick={this.handleHostClick}>
              <img className="event-host-image" src={prof_pic} />
              <h1 className="event-host-name">{this.props.event.host_name}</h1>
            </div>

            <div className="event-host-buttons-container">
              {deleteButton}
              {editButton}
            </div>
          </div>


          <div className="event-details-container">

            <div className="event-time-container">
              <h1 className="event-weekday">
                {this.props.event.readable_date_time.split(" ")[0]}
              </h1>
              <h1 className="event-date">
                {this.props.event.readable_date_time.split(" ")[1]}
              </h1>
              <h1 className="event-time">
                {this.props.event.readable_date_time.split(" ")[2]}
              </h1>
            </div>

            <div className="event-address">
              <a className="event-yelp-link" href={yelp_link} target="_blank"><i className="fa fa-yelp" aria-hidden="true"></i>{this.props.event.restaurant} </a>
              <h1 className="event-address"> @ {this.props.event.address} </h1>
            </div>

            <div className="event-food-type">
              <h1 className="event-item-type-title">Food type:</h1>{this.props.event.food_type}
            </div>

            <div className="event-city">
              <h1 className="event-item-type-title">City:</h1>{this.props.event.city_name}
            </div>

          </div>

          <div className="event-seats">
            <h1 className={seatsclassName}>{seatsLeft} seat(s) left!</h1>
          </div>

        </div>

        <div className="event-button-container">
          {eventButton}
        </div>

        <Modal

          isOpen={this.state.deleteModalOpen}
          onRequestClose={this.closeDeleteModal}
          style={style} >

          <i className="fa fa-times" aria-hidden="true" onClick={this.closeDeleteModal}></i>
          <div className="delete-modal-container">
            <div className="delete-account-text-container">
              <h1 className="delete-account-title">{Modalphrase}</h1>
            </div>
            <div className="delete-account-choices">
              <button className="delete-confirm-button" onClick={ModalHandler}>Yes</button>
              <button className="cancel-button" onClick={this.closeDeleteModal}>cancel</button>
            </div>
          </div>
        </Modal>

      </div>
    );
  }
}

export default withRouter(EventItem);
