import React from "react";
import {withRouter} from "react-router";
import Modal from "react-modal";

class EventItem extends React.Component{
  constructor(props) {
    super(props);
    this.handleJoinEvent = this.handleJoinEvent.bind(this);
    this.handleDropoutEvent = this.handleDropoutEvent.bind(this);
    this.handleUpdateEvent = this.handleUpdateEvent.bind(this);
    this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
    this.handleHostClick = this.handleHostClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.state = {
      modalOpen: false
    };
  }


  handleUpdateEvent() {
    console.log('udpate');
  }

  handleJoinEvent() {
console.log('join');
  }

  handleDropoutEvent() {
console.log('dropout');
  }

  handleDeleteEvent() {
    console.log('delete');
  }

  handleHostClick() {
    this.props.router.push(`/cities/${this.props.event.city_id}/hosts/${this.props.event.host_id}`);
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  render() {
    let eventButton;
    if (this.props.event.host_id === this.props.currentUser.id) {
      eventButton = (<button className="join-event-button" onClick={this.handleUpdateEvent}>Edit Event</button>);
    } else if (this.props.event.attendees.includes(this.props.currentUser.id)) {
      eventButton = (<button className="join-event-button" onClick={this.openModal}>Maybe next time</button>);
    } else if (this.props.event.limit === this.props.event.attendees.length) {
      eventButton = (<div></div>);
    } else {
      eventButton = (<button className="join-event-button" onClick={this.handleJoinEvent}>Sign me up!</button>);
    }

    let deleteButton;

    if (this.props.event.host_id === this.props.currentUser.id) {
      deleteButton = (<button className="join-event-button" onClick={this.openModal}>Delete Event</button>);
    } else {
      deleteButton = (<div></div>);
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

    return (
      <div className="event-item-with-button-container">
        <div className="event-item-container">

          <div className="event-host-container" onClick={this.handleHostClick}>
            <img className="event-host-image" src={this.props.event.host_profile_pic_url} />
            <h1 className="event-host-name">{this.props.event.host_name}</h1>
          </div>

          <div className="event-details-container">

            <div className="event-time-container">
              <h1 className="event-weekday">
                {this.props.event.date_time.split(" ")[0]}
              </h1>
              <h1 className="event-date">
                {this.props.event.date_time.split(" ")[1]}
              </h1>
              <h1 className="event-time">
                {this.props.event.date_time.split(" ")[2]}
              </h1>
            </div>

            <div className="event-location">
              <a className="event-yelp-link" href={this.props.event.yelp_link}><i className="fa fa-yelp" aria-hidden="true"></i>{this.props.event.restaurant} </a>
              <h1 className="event-address"> @ {this.props.event.location} </h1>
            </div>

            <div className="event-food-type">
              Food type: {this.props.event.food_type}
            </div>

            <div className="event-city">
              City: {this.props.event.city_name}
            </div>

          </div>

          <div className="event-seats">
            <h1 className={seatsclassName}>{seatsLeft} seats left!</h1>
          </div>
        </div>

        <div className="event-buttons-container">
          {eventButton}
          {deleteButton}
        </div>

        <Modal

          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={style} >

          <i className="fa fa-times" aria-hidden="true" onClick={this.closeModal}></i>
          <div className="delete-modal-container">
            <div className="delete-account-text-container">
              <h1 className="delete-account-title">{Modalphrase}</h1>
            </div>
            <div className="delete-account-choices">
              <button className="delete-confirm-button" onClick={ModalHandler}>Yes</button>
              <button className="cancel-button" onClick={this.closeModal}>cancel</button>
            </div>
          </div>
        </Modal>

      </div>
    );
  }
}



export default withRouter(EventItem);
