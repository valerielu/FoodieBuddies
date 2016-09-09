import React from "react";
import {withRouter} from "react-router";
import EventItemContainer from "../event/event_item_container.jsx";
import HostItem from "../user/host_item.jsx";

class CityDetails extends React.Component{
  constructor(props) {
    super(props);
    this.handleEventCreate = this.handleEventCreate.bind(this);
    this.handleHostCreate = this.handleHostCreate.bind(this);
  }

  componentDidMount() {
    if (!this.props.city || (this.props.city.id !== this.props.params.cityId)) {
      this.props.requestSingleCity(this.props.params.cityId);
    }
  }

  componentWillUnmount() {
    //unmount props so it doesnt flicker when the next one is mounted
  }

  handleEventCreate() {
    this.props.router.push("/events/new");
  }

  handleHostCreate() {
    this.props.router.push("/hosting");
  }

  render() {
    // inpiration button => (data have to come with each city)

    if (this.props.city && (this.props.city.id === parseInt(this.props.params.cityId))) {

      const events = this.props.events.map(event => (
        <EventItemContainer key={event.id} event={event}/>
      ));

      const hosts = this.props.hosts.map(host => (
        <HostItem key={host.id} host={host}/>
      ));

      let eventStatus, eventStatusTagline;
      if (events.length > 0) {
        eventStatus = "Join a foodie event!";
        eventStatusTagline = "Meet some serious foodies and go on a delicious adventure!";
      } else {
        eventStatus = "No foodie events coming up!";
        eventStatusTagline = "Talk to the hosts to create one or become a host yourself!";
      }

      let eventStatusNote, clickHandler, buttonText;
      if ( this.props.currentUser && this.props.currentUser.city_id && this.props.currentUser.city_id === this.props.city.id) {
        eventStatusNote = "You are a host of this city! Add to the event list!";
        clickHandler = this.handleEventCreate;
        buttonText = "Create event";
      } else {
        eventStatusNote = `Love the food in ${this.props.city.name}? Get more people to enjoy it with you!`;
        clickHandler = this.handleHostCreate;
        buttonText = "Become a host";
      }

      return (
        <div className="city-detail-container">

          <div className="city-detail-welcome-container">
            <img className="city-detail-image" src={this.props.city.pic_url} />
            <div className="city-detail-text-containter">
              <h1 className="city-detail-title">{this.props.city.name}, {this.props.city.country}</h1>
              <h1 className="city-detail-tagline">Ready to grub?</h1>
            </div>
          </div>

          <div className="city-detail-events-container">
            <div className="city-detail-events-text-container">
              <h1 className="city-detail-events-title"> {eventStatus} </h1>
              <h1 className="city-detail-events-description"> {eventStatusTagline} </h1>
            </div>

            <div className="city-detail-host-text-container">
              <h1 className="city-detail-host-note"> <i className="fa fa-bell-o" aria-hidden="true"></i> {eventStatusNote} </h1>
              <button className="create-event-button" onClick={clickHandler}>{buttonText}</button>
             </div>

            <ul className="city-detail-events-list">
              {events}
            </ul>
          </div>

          <div className="city-detail-hosts-container">
            <div className="city-detail-hosts-text-container">
              <h1 className="city-detail-hosts-title">Get to know your hosts in {this.props.city.name}!</h1>
              <h1 className="city-detail-hosts-description">The host community is full of folks that generally love good conversations, bringing people together, and open minds. Like yourself, each of them has an incredible story that brought them to where they are right now.</h1>
            </div>
            <ul className="city-detail-hosts-list">
              {hosts}
            </ul>
          </div>

        </div>
      );

    }
    else {
      return (<div className="spin-container"><i className="fa fa-refresh fa-spin fa-3x fa-fw"></i></div>);
    }
  }
}



export default withRouter(CityDetails);
