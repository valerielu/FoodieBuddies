import React from "react";
import CityItemContainer from "./city_item_container.jsx";

class Cities extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllCities();
  }

  render() {
    let cities;
    if (this.props.cities) {
      const cityDetailIndex = 0;
      cities = Object.keys(this.props.cities).map(id =>
          (
            <CityItemContainer key={id} city={this.props.cities[id]} />
          )
        );
      }

    return (
      <div className="cities-container">
        <h1 className="cities-title">Where can you find us?</h1>
        <h1 className="cities-tagline">Find foodiebuddies in your city!</h1>
        <div className="cities-images-container">
          <ul className="city-list">
            {cities}
          </ul>
        </div>
        <h1 className="cities-tagline">Coming to more cities soon!</h1>
      </div>
    );
  }
}



export default Cities;
