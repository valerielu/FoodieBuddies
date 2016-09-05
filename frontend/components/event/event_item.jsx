import React from "react";
import {withRouter} from "react-router";

class EventItem extends React.Component{
  constructor(props) {
    super(props);
    this.handleEventClick = this.handleEventClick.bind(this);
  }

  handleEventClick() {
    this.props.router.push("/dashboard");
  }

  render() {

    let button;
    if (this.props.event.host_id === this.props.currentUser.id) {
      button = (<button className="join-event-button" onClick={this.handleEventClick}>Edit Event</button>);
    } else if (this.props.event.attendees.includes(this.props.currentUser.id)) {
      button = (<button className="join-event-button" disabled="true">Joined</button>);
    } else if (this.props.event.limit === this.props.event.attendances.length) {
      button = (<button className="join-event-button" disabled="true">Packed</button>);
    } else {
      button = (<button className="join-event-button" onClick={this.handleEventClick}>Sign me up!</button>);
    }

    // json.extract! event, :id, :date_time, :location, :limit, :host_id, :city_id, :food_type, :restaurant, :yelp_link, :lat, :lng
    // json.host_name event.host.first_name
    // json.host_prof_pic_url event.host.prof_pic_url
    // json.city_name event.city.name
    // json.attendees event.attendances.pluck(:user_id)
    //yelp red  #c41200

    const seatsLeft = this.props.event.limit - this.props.event.attendees.length;

    console.log();
    return (
      <div className="event-item-container">

        <div className="event-host-container">
          <img className="event-host-image" src={this.props.event.host_prof_pic_url} />
          <h1 className="event-host-name">{this.props.event.host_name}</h1>
        </div>

        <div className="event-details-container">

          <div className="event-time">
            {this.props.event.date_time}
          </div>

          <div className="event-location">
            <a className="event-yelp-link" href={this.props.event.yelp_link}><i className="fa fa-yelp" aria-hidden="true"></i></a>
            {this.props.event.restaurant} @ {this.props.event.location}
          </div>

          <div className="event-food-type">
            {this.props.event.food_type}
          </div>

          <div className="event-yelp">


          </div>

          <div className="event-seats">
            <h1 className="event-seats-left">{seatsLeft} seats left!</h1>
          </div>

        </div>
        {button}
      </div>
    );
  }
}



export default withRouter(EventItem);
