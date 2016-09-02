import React from "react";
import {withRouter} from "react-router";
import Event from "../event/event_item.jsx";
import Host from "../user/host_item.jsx";

class CityDetails extends React.Component{
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    if (!this.props.city) {
      this.props.requestSingleCity(this.props.params.cityId);
    }
  }

  render() {
    // inpiration button => (data have to come with each city)
    if (this.props.city) {

      const events = this.props.events.map(event => (
        <Event key={event.id} event={event} currentUser={this.props.currentUser}/>
      ));

      const hosts = this.props.hosts.map(host => (
        <Host key={host.id} host={host}/>
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
        (<button className="create-event-button" onClick={this.handleLogout}>Log Out</button>)
        :
        (<div></div>);

      return (
        <div className="city-detail-container">

          <div className="city-detail-welcome-container">
            <img className="city-detail-image" src={this.props.city.pic_url} />
            <h1 className="city-detail-title">{this.props.city.name}</h1>
            <h1 className="city-detail-tagline">Ready to grub?</h1>
          </div>

          <div className="city-detail-events-container">
            {eventStatus}
            {eventCreateButton}
            <ul>
              {events}
            </ul>
          </div>

          <div className="city-detail-hosts-container">
            <h1 className="city-detail-hosts-title">Get to know your hosts in {this.props.city.name}</h1>
            <h1 className="city-detail-hosts-description"></h1>
            <ul>
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
