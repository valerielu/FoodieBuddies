import React from "react";
import {withRouter} from "react-router";
import Event from "../event/event_item.jsx";

class CityDetails extends React.Component{
  constructor(props) {
    super(props);

  }

  render() {
    // inpiration button => (data have to come with each city)
    if (this.props.city) {

      const className = `city-detail-background ${this.props.city.name.split(" ").join("")}`;
      const events = this.props.city.events.map(event => (
        <Event event={event} currentUser={this.props.currentUser}/>
      ));

      // // const hosts = this.props.city.hosts.map(host => (
      //   <Host host={host}/>
      // ));
      return (
        <div className="city-detail-container">

          <div className="city-detail-welcome-container">
            <div></div>
            <h1 className="city-detail-title">{this.props.city.name}</h1>
            <h1 className="city-detail-tagline">Ready to grub?</h1>
          </div>

          <div className="city-detail-events-container">
            <h1 className="city-detail-events-title">Join a foodie event!</h1>
            <h1 className="city-detail-events-description"></h1>
            <ul>
              {events}
            </ul>
          </div>

          <div className="city-detail-hosts-container">
            <h1 className="city-detail-hosts-title">Get to know your hosts in {this.props.city.name}</h1>
            <h1 className="city-detail-hosts-description"></h1>
            <ul>
              hosts come here!
            </ul>
          </div>

        </div>
      );

    } else {
      return (<div>nothing yet</div>);
    }
  }
}



export default withRouter(CityDetails);
