import React from "react";
import {withRouter} from "react-router";
import { DateField, Calendar, DatePicker } from 'react-date-picker';
import "moment";

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date_time: undefined,
      address: "",
      limit: "",
      city_id: this.props.currentUser.city_id,
      host_id: this.props.currentUser.id,
      restaurant: "",
      food_type: "",
      yelp_link: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFields = this.updateFields.bind(this);
    this.onChange = this.onChange.bind(this);

  }

  componentWillMount(){
    if (!this.props.currentUser.is_host) {
      this.props.router.push("/hosting");
    }
  }

  updateFields (property) {
    return (e) => {
      this.setState({[property]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createEvent(this.state);
  }

  onChange (dateString, { dateMoment, timestamp }) {
    this.setState({date_time: dateString});
  }

  render () {

    let errors;
    if (this.props.errors) {
      errors = this.props.errors.map((error, idx) => (
        <li key={idx} >{error}</li>
      ));
    } else {
      errors = [];
    }
    let currentTime = Date.now();

    return (
      <div className="new-event-form-container">
        <h1 className="new-event-form-title">Create a new event in {this.props.currentUser.city_name}</h1>

        <form onSubmit={this.handleSubmit} className="new-event-form">

          <DateField
            dateFormat="YYYY-MM-DD hh:mm a"
            forceValidDate={true}
            updateOnDateClick={true}
            defaultValue={currentTime}
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
            <input className="event-form-text-input" type="text" onChange={this.updateFields("restaurant")} value={this.state.restaurant} placeholder="Restaurant"/>
          </div>
          <div className="form-input-container">
            <input className="event-form-text-input" type="text" onChange={this.updateFields("address")} value={this.state.address} placeholder="Address"/>
          </div>
          <div className="form-input-container">
            <input className="event-form-text-input" type="text" onChange={this.updateFields("food_type")} value={this.state.food_type} placeholder="Food type (Ex: Indian) (optional)"/>
          </div>
          <div className="form-input-container">
            <input className="event-form-text-input" type="text" onChange={this.updateFields("yelp_link")} value={this.state.yelp_link} placeholder="Yelp link for restaurant (optional)"/>
          </div>
          <div className="form-input-container">
            <input className="event-form-text-input" type="number" onChange={this.updateFields("limit")} value={this.state.limit} placeholder="Event size (limit between 2 - 9 attendees)"/>
          </div>

          <ul className="login-errors">
            {errors}
          </ul>

          <input className="submit-event-button" type="submit" value="Submit" />
        </form>

      </div>
    );
  }
}

export default withRouter(EventForm);
