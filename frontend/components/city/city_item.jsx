import React from "react";
// import {withRouter} from "react-router";

class CityItem extends React.Component{
  constructor(props) {
    super(props);
    this.handleCityClick = this.handleCityClick.bind(this);
  }

  handleCityClick(e) {
    this.props.requestSingleCity(this.props.city.id);
  }

  render() {
    const className = `city-item-${this.props.city.name.split(" ").join("")}`;
    return (
      <div className="city-item-container" onClick={this.handleCityClick}>
          <span className="city-name">
            {this.props.city.name}
          </span>
          <img className="city-item-image" src={this.props.city.pic_url} />
      </div>
    );
  }
}


export default CityItem;
