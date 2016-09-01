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
    const button = 0;
    return (
      <div className="event-item-container">
        <li className="event-item" onClick={this.handleEventClick}>
          <div className="event-time-container">
            <span className="event-date">
              {this.props.event.date}
            </span>
            <span className="event-time">
              {this.props.event.date}
            </span>
          </div>
          <div className="event-location-container">
            <span className="event-location">
              {this.props.event.location}
            </span>
            <span className="event-restaurant">
              {this.props.event.location}
            </span>
          </div>
        </li>
      </div>
    );
  }
}



export default withRouter(EventItem);
