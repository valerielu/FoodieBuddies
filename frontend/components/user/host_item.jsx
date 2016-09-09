import React from "react";
import {withRouter} from "react-router";

class HostItem extends React.Component{
  constructor(props) {
    super(props);
    this.handleHostClick = this.handleHostClick.bind(this);
  }

  handleHostClick() {
    this.props.router.push(`/cities/${this.props.host.city_id}/hosts/${this.props.host.id}`);
  }

  render() {

    const prof_pic = (this.props.host.profile_pic_url) ? this.props.host.profile_pic_url : "https://robohash.org/autvoluptatemvoluptatum.png?size=250x250&set=set1";
    const className = `host-${this.props.host.username}`;

    return (
      <div className="host-item-container">
        <li className={className} onClick={this.handleHostClick}>
          <img className="host-item-image" src={prof_pic} />
          <span className="host-name">
            {this.props.host.first_name}
          </span>
        </li>
      </div>
    );
  }
}



export default withRouter(HostItem);
