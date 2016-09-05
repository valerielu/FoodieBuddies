import React from "react";

class HostDetails extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.city) {
      this.props.requestSingleCity(this.props.params.cityId);
    }
  }

  render() {
    let host, prof_pic, title, tagline, profileTitle;
    if (this.props.city) {
      host = this.props.city.hosts[this.props.params.hostId];
      prof_pic = (host.profile_pic_url) ? host.profile_pic_url : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Pacman.svg/2000px-Pacman.svg.png";
      title = `Hello there, I'm ${host.first_name}!`;
      tagline = `Let's get some deliciousness in ${this.props.city.name}!`;
      profileTitle = `${host.first_name}'s story`;
    }

    if (this.props.city) {
      return (

        <div className="host-details-container">
          <div className="host-detail-welcome-container">
            <img className="host-detail-welcome-image" src="" />
            <div className="host-detail-welcome-text-containter">
              <h1 className="host-detail-welcome-title">{title}</h1>
              <h1 className="host-detail-welcome-tagline">{tagline}</h1>
            </div>
          </div>

          <div className="host-details-image-container">
            <img className="host-profile-image" src={host.prof_pic} />
          </div>

          <div className="host-details-profile-container">
            <h1 className="host-detail-profile-title">{profileTitle}</h1>
            <p>{host.profile}</p>
          </div>

        </div>
      );
    } else {
      return (<div>HELLOOOOOO!</div>);
    }
  }
}



export default HostDetails;
