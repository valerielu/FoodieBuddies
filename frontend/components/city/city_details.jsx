import React from "react";
import {withRouter} from "react-router";

class CityDetails extends React.Component{
  constructor(props) {
    super(props);
    console.log("got to city details");
    console.log(this.props.params);
  }

  render() {
    const className = `city-item-${this.props.city.name.split(" ").join("")}`;
    return (
      <div className="city-item-container">
        <li className={className}>
          <span className="city-name">
            {this.props.city.name}
          </span>
          </li>
      </div>
    );
  }
}



export default withRouter(CityDetails);
