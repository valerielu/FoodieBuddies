import React from "react";
import EventItemContainer from "../event/event_item_container.jsx";

class Dashboard extends React.Component{
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestAllEvents();
  }

  render() {
    const events = Object.key(this.props.events) (event => (
      <EventItemContainer key={event.id} event={event}/>
    ));

    return (


      <div className="cities-container">
        <h1 className="cities-title">Where can you find us?</h1>
        <h1 className="cities-tagline">Find foodiebuddies in your city!</h1>
        <div className="cities-images-container">
          <ul className="city-list">
            {events}
          </ul>
        </div>
        <h1 className="cities-tagline">Coming to more cities soon!</h1>
      </div>
    );
  }
}



export default Dashboard;
