import React from "react";
import {withRouter} from "react-router";

class EventItem extends React.Component{
  constructor(props) {
    super(props);
    this.handleEventClick = this.handleEventClick.bind(this);
  }

  handleEventClick() {

  }

  render() {
    const button = 0; //check if event is already attended by current user (if yes, show on your calendar
    // if not, show the attend button)

    // json.extract! event, :id, :date, :time, :location, :limit, :host_id, :city_id, :food_type, :restaurant, :yelp_link, :lat, :lng
    // json.host_name event.host.first_name
    // json.host_prof_pic_url event.host.prof_pic_url
    // json.city_name event.city.name
    // json.attendees event.attendances.pluck(:user_id)

    return (
      <div className="event-container">
        <div className="event-detail-container">
          <li className="event-item">
            <div className="event-time-container">
              <span className="event-date">
                {this.props.event.date}
              </span>
              <span className="event-time">
                {this.props.event.time}
              </span>
            </div>
            <div className="event-location-container">
              <span className="event-location">
                {this.props.event.location}
              </span>
              <span className="event-restaurant">
                {this.props.event.restaurant}
              </span>
            </div>
          </li>
        </div>

        {button}
      </div>
    );
  }
}



export default withRouter(EventItem);
