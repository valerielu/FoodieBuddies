import React from "react";
import EventItemContainer from "../event/event_item_container.jsx";
import {withRouter} from "react-router";

class Dashboard extends React.Component{
  constructor(props) {
    super(props);
    this.handleJoinEvents = this.handleJoinEvents.bind(this);
    this.handleCreateEvents = this.handleCreateEvents.bind(this);
    this.hostedEvents = this.hostedEvents.bind(this);
    this.attendingEvents = this.attendingEvents.bind(this);

  }

  componentWillMount() {
    this.props.requestAllEvents();
  }

  handleCreateEvents() {
    this.props.router.push("/events/new");
  }

  handleJoinEvents() {
    this.props.router.push("/cities");
  }


  hostedEvents() {
    let events = [];

    if (this.props.events.event_order) {
      this.props.events.event_order.forEach(key => {
        if (key === "eventErrors" || key === "event_order") {
        } else if (this.props.events[key].host_id === this.props.currentUser.id) {
          events.push(this.props.events[key]);
        }
      });
    }

    return events;
    // if (this.props.events) {
    //   Object.keys(this.props.events).forEach(key => {
    //     if (key === "eventErrors") {
    //     } else if (this.props.events[key].host_id === this.props.currentUser.id) {
    //       events.push(this.props.events[key]);
    //     }
    //   });
    // }

  }

  attendingEvents() {
    let events = [];

    if (this.props.events.event_order) {
      this.props.events.event_order.forEach(key => {
        if (key === "eventErrors" || key === "event_order") {
        }
        else if (this.props.events[key].attendees.includes(this.props.currentUser.id)) {
          events.push(this.props.events[key]);
        }
      });
    }
    return events;

    // Object.keys(this.props.events).forEach(key => {
    //   if (key === "eventErrors" || key === "event_order") {
    //   }
    //   else if (this.props.events[key].attendees.includes(this.props.currentUser.id)) {
    //     events.push(this.props.events[key]);
    //   }
    // });

  }

  render() {

    const hostedEvents = this.hostedEvents().map(event => (
      <EventItemContainer key={event.id} event={event}/>
    ));

    const attendingEvents = this.attendingEvents().map(event => (
      <EventItemContainer key={event.id} event={event}/>
    ));

    let dashboardTitle;
    if (attendingEvents.length === 0) {
      dashboardTitle = "No upcoming events! Let's change that.";
    } else {
      dashboardTitle = "Upcoming events";
    }

    let hostInfo;
    if (this.props.currentUser.is_host) {
      hostInfo = (
        <div>
          <h1 className="dashboard-title">Events you are hosting</h1>

          <div className="dashboard-events-container">
            <ul className="events-list">
              {hostedEvents}
              <div className="add-more-button-container">
                <button className="add-more-events-button" onClick={this.handleCreateEvents}>
                  <i className="fa fa-plus" aria-hidden="true"></i> Create a foodie event</button>
                </div>
            </ul>
          </div>
        </div>
      );
    } else {
      hostInfo = (<div></div>);
    }
    return (


      <div className="dashboard-container">
        <h1 className="dashboard-welcome">Welcome home, {this.props.currentUser.username}. Hungry?</h1>

        <h1 className="dashboard-title">{dashboardTitle}</h1>

        <div className="dashboard-events-container">
          <ul className="events-list">
            {attendingEvents}
            <div className="add-more-button-container">
              <button className="add-more-events-button" onClick={this.handleJoinEvents}>
                <i className="fa fa-plus" aria-hidden="true"></i> Join more foodie events</button>
            </div>
          </ul>

        </div>

        {hostInfo}

      </div>
    );
  }
}



export default withRouter(Dashboard);
