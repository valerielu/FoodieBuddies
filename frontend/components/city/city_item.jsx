import React from "react";
import {withRouter} from "react-router";

class CityItem extends React.Component{
  constructor(props) {
    super(props);
    this.handleCityClick = this.handleCityClick.bind(this);
  }

  handleCityClick() {
    this.props.router.push(`/cities/${this.props.city.id}`);
  }

  render() {
    const className = `city-item-${this.props.city.name.split(" ").join("")}`;
    return (
      <div className="city-item-container">
        <li className={className} onClick={this.handleCityClick}>
          <img className="city-item-image" src={this.props.city.pic_url}/>
          <span className="city-name">
            {this.props.city.name}
          </span>
        </li>
      </div>
    );
  }
}



export default withRouter(CityItem);
