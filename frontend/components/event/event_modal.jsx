import React from "react";
import {withRouter} from "react-router";
import Modal from "react-modal";
import { DateField, Calendar, DatePicker } from 'react-date-picker';
import "moment";

class EventModal extends React.Component{
  constructor(props) {
    super(props);

    this.closeEventModal = this.closeEventModal.bind(this);
    this.openEventModal = this.openEventModal.bind(this);
    this.updateFields = this.updateFields.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleEventSubmit = this.handleEventSubmit.bind(this);

    let food_type = this.props.event.food_type ? this.props.event.food_type : "";
    let yelp_link = this.props.event.yelp_link ? this.props.event.yelp_link : "";

    this.state = {
      ModalOpen: false,
      eventData: {
        date_time: this.props.event.date_time,
        address: this.props.event.address,
        limit: this.props.event.limit,
        restaurant: this.props.event.restaurant,
        food_type: food_type,
        yelp_link: yelp_link
      }
    };
  }

  updateFields (property) {
    return (e) => {
      this.setState(
        {eventData:
          {
            date_time: this.state.eventData.date_time,
            address: this.state.eventData.address,
            limit: this.state.eventData.limit,
            restaurant: this.state.eventData.restaurant,
            food_type: this.state.eventData.food_type,
            yelp_link: this.state.eventData.yelp_link,
            [property]: e.target.value
          }
        }
      );
    };
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.errors && nextProps.errors.length === 0) {
    //   this.closeEventModal();
    // }

    if (!nextProps.errors) {
      this.closeEventModal();
    } else {
      this.openEventModal();
    }
  }

  onChange (dateString, { dateMoment, timestamp }) {
    this.setState({eventData:
      {
        date_time: dateString
      }
    });
  }

  handleEventSubmit(e) {
    e.preventDefault();
    this.props.updateEvent(this.props.event.id, this.state.eventData);
  }

  closeEventModal() {
    this.setState({ ModalOpen: false });
  }

  openEventModal() {
    this.setState({ ModalOpen: true });
  }

  render() {

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
        top             : '75px',
        left            : '150px',
        right           : '150px',
        bottom          : '75px',
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

    let errors;
    if (this.props.errors) {
      errors = this.props.errors.map((error, idx) => (
        <li key={idx} >{error}</li>
      ));
    }


  let dateDefault = new Date(this.props.event.date_time);
  dateDefault.setTime(dateDefault.getTime() + dateDefault.getTimezoneOffset()*60*1000);

    return (
      <div className="event-modal-with-button">
        <button className="edit-event-button" onClick={this.openEventModal}><i className="fa fa-pencil" aria-hidden="true"></i></button>
          <Modal

            isOpen={this.state.ModalOpen}
            onRequestClose={this.closeEventModal}
            style={style} >

            <i className="fa fa-times" aria-hidden="true" onClick={this.closeEventModal}></i>

            <div className="edit-event-form-container">
              <h1 className="new-event-form-title">Edit Event</h1>

              <form onSubmit={this.handleEventSubmit} className="edit-event-form">

                <div className="modal-form">
                  <div className="modal-left-div">
                    <h1 className="form-label">Date and Time</h1>
                    <DateField
                      dateFormat="YYYY-MM-DD hh:mm a"
                      forceValidDate={true}
                      updateOnDateClick={true}
                      defaultValue={dateDefault.getTime()}
                      className = "event-form-datetime"
                      onChange={this.onChange}
                    >
                      <DatePicker
                        navigation={true}
                        locale="en"
                        forceValidDate={true}
                        highlightWeekends={true}
                        highlightToday={true}
                        weekNumbers={true}
                        weekStartDay={0}
                      />
                    </DateField>

                    <div className="form-input-container">
                      <h1 className="form-label">Restaurant</h1>
                      <input className="event-edit-form-text-input" type="text" onChange={this.updateFields("restaurant")} value={this.state.eventData.restaurant} placeholder="Restaurant"/>
                    </div>
                    <div className="form-input-container">
                      <h1 className="form-label">Address</h1>
                      <input className="event-edit-form-text-input" type="text" onChange={this.updateFields("address")} value={this.state.eventData.address} placeholder="Address"/>
                    </div>
                  </div>

                  <div className="modal-right-div">
                    <div className="form-input-container">
                      <h1 className="form-label">Food type (optional)</h1>
                      <input className="event-edit-form-text-input" type="text" onChange={this.updateFields("food_type")} value={this.state.eventData.food_type} placeholder="Food type (Ex: Indian) (optional)"/>
                    </div>
                    <div className="form-input-container">
                      <h1 className="form-label">Yelp link (optional)</h1>
                      <input className="event-edit-form-text-input" type="text" onChange={this.updateFields("yelp_link")} value={this.state.eventData.yelp_link} placeholder="Yelp link for restaurant (optional)"/>
                    </div>
                    <div className="form-input-container">
                      <h1 className="form-label">Event size limit</h1>
                      <input className="event-edit-form-text-input" type="number" onChange={this.updateFields("limit")} value={this.state.eventData.limit} placeholder="Event size limit"/>
                    </div>
                  </div>
                </div>

                <ul className="login-errors">
                  {errors}
                </ul>

                <input className="submit-event-button" type="submit" value="Submit" />
              </form>

            </div>
          </Modal>
      </div>
    );
  }
}

export default withRouter(EventModal);
