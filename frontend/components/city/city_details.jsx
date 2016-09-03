import React from "react";
import {withRouter} from "react-router";
import EventItemContainer from "../event/event_item_container.jsx";
import HostItemContainer from "../user/host_item_container.jsx";

class CityDetails extends React.Component{
  constructor(props) {
    super(props);
    this.handleEventCreate = this.handleEventCreate.bind(this);
    this.handleHostCreate = this.handleHostCreate.bind(this);
  }

  componentDidMount() {
    if (!this.props.city) {
      this.props.requestSingleCity(this.props.params.cityId);
    }
  }

  handleEventCreate() {
    this.props.router.push("/dashboard");
  }

  handleHostCreate() {
    this.props.router.push("/hosting");
  }

  render() {
    // inpiration button => (data have to come with each city)
    if (this.props.city) {

      const events = this.props.events.map(event => (
        <EventItemContainer key={event.id} event={event}/>
      ));

      const hosts = this.props.hosts.map(host => (
        <HostItemContainer key={host.id} host={host}/>
      ));

      const eventStatus = (events.length > 0) ?
        (<div className="city-detail-events-text-container">
          <h1 className="city-detail-events-title">Join a foodie event!</h1>
          <h1 className="city-detail-events-description"> Meet some serious foodies and go on a delicious adventure! </h1>
        </div>)
        :
        (<div className="city-detail-events-text-container">
          <h1 className="city-detail-events-title"> No foodie events coming up!</h1>
          <h1 className="city-detail-events-description"> Talk to the hosts to create one or become a host yourself! </h1>
        </div>);

      const eventCreateButton = ( this.props.currentUser && this.props.currentUser.is_host) ?
        (<button className="create-event-button" onClick={this.handleEventCreate}>Create new event</button>)
        :
        (<button className="create-host-button" onClick={this.handleHostCreate}>Become a host</button>);

      return (
        <div className="city-detail-container">

          <div className="city-detail-welcome-container">
            <img className="city-detail-image" src={this.props.city.pic_url} />
            <div className="city-detail-text-containter">
              <h1 className="city-detail-title">{this.props.city.name}</h1>
              <h1 className="city-detail-tagline">Ready to grub?</h1>
            </div>
          </div>

          <div className="city-detail-events-container">
            {eventStatus}
            {eventCreateButton}
            <ul className="city-detail-events-list">
              {events}
            </ul>
          </div>

          <div className="city-detail-hosts-container">
            <div className="city-detail-hosts-text-container">
              <h1 className="city-detail-hosts-title">Get to know your hosts in {this.props.city.name}!</h1>
              <h1 className="city-detail-hosts-description"></h1>
            </div>
            <ul className="city-detail-hosts-list">
              {hosts}
            </ul>
          </div>

        </div>
      );

    }
    else {
      return (<div></div>);
    }
  }
}



export default withRouter(CityDetails);
