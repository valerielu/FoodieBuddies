import React from "react";
import {withRouter} from "react-router";

class HostItem extends React.Component{
  constructor(props) {
    super(props);
    this.handleHostClick = this.handleHostClick.bind(this);
  }

  handleHostClick() {
    
  }

  render() {
    const button = 0;
    return (
      <div className="host-item-container">
        <li className="host-item" onClick={this.handleHostClick}>
          <span className="host-name">
            {this.props.host.id}
          </span>
        </li>
      </div>
    );
  }
}



export default withRouter(HostItem);
