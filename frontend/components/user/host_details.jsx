import React from "react";

class HostDetails extends React.Component{
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestSingleUser(this.props.params.hostId);
  }

  componentWillUnmount() {
    //unmount props so it doesnt flicker when the next one is mounted
  }

  render() {
    let profile_pic, title, tagline, profileTitle;
    if (this.props.host && (this.props.host.id === parseInt(this.props.params.hostId)))  {
      profile_pic = (this.props.host.profile_pic_url) ? this.props.host.profile_pic_url : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Pacman.svg/2000px-Pacman.svg.png";
      title = `Hello there, I'm ${this.props.host.first_name}!`;
      tagline = `Let's get some deliciousness in ${this.props.host.city_name}!`;
      profileTitle = `${this.props.host.first_name}'s story`;
    }

    if (this.props.host) {
      return (

        <div className="host-details-container">
          <div className="host-detail-welcome-container">
            <div className="host-detail-welcome-text-containter">
              <h1 className="host-detail-welcome-title">{title}</h1>
              <h1 className="host-detail-welcome-tagline">{tagline}</h1>
            </div>

          </div>
          <div className="host-info-container">
            <div className="host-details-image-container">
              <img className="host-profile-image" src={profile_pic} />
            </div>

            <div className="host-details-profile-container">
              <h1 className="host-detail-profile-title">{profileTitle}</h1>
              <p>{this.props.host.profile}</p>
            </div>

          </div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
}



export default HostDetails;
