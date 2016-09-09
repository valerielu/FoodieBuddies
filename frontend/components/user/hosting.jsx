import React from "react";
import {withRouter} from "react-router";
import HostingFormContainer from "./host_form_container.jsx";

class Hosting extends React.Component{
  constructor(props) {
    super(props);
    this.handleEventCreate = this.handleEventCreate.bind(this);
    this.handleHostCreate = this.handleHostCreate.bind(this);
    // this.state = {showform: false};
    this.showform = window.location.hash.includes("hosting/new") ? true : false;
  }

  handleEventCreate() {
    this.props.router.push("/events/new");
  }

  handleHostCreate() {
    this.props.router.push("/hosting/new");
    this.showform = true;
    // this.setState({showform: true});
    //dont need this now since i set state it will re-render
    //but i am keeping it because I want to ensure log in whe the form is shown
    //ok
  }

  render() {

    let conditionalHostContent;

    if (this.props.currentUser && this.props.currentUser.is_host) {
      conditionalHostContent =
      (<div className="hosting-action-container">
          <h1 className="hosting-action-title"><i className="fa fa-bell-o" aria-hidden="true"></i>  You are already a host for {this.props.currentUser.city_name}! (which means you are awesome)</h1>
          <h1 className="hosting-action-description">Be even more awesome by starting new event!</h1>
          <button className="create-event-button" onClick={this.handleEventCreate}>Create event</button>
        </div>
      );
    } else {
      const phrase = "I'm interested!";
      conditionalHostContent =
      (<div className="hosting-action-container">
         <button className="host-interest-button"
           onClick={this.handleHostCreate}>{phrase}</button>
       </div>
     );
    }

    const HostForm = (this.showform) ? (<HostingFormContainer />) : (<div></div>);

    return (
      <div className="hosting-container">

        <div className="hosting-welcome-container">
          <div className="hosting-image"></div>
          <div className="hosting-welcome-text-containter">
            <h1 className="hosting-welcome-title">Join the host family</h1>
            <h1 className="hosting-welcome-tagline">Meet awesome people and start eating!</h1>
          </div>
        </div>

        <div className="hosting-info-container">
          <h1 className="hosting-info-title">There are so many good restaurants, but so few people to try them with...</h1>
          <h1 className="hosting-info-description"> If you love bringing people together and you love food (obviously), then keep reading! </h1>
          <ol>
            <li>What is a host?</li>
            <p className="hosting-info-paragraphs">
              Hosts put up foodie events in their city and give us all a chance to meet each other over some yummies.
              And we know that real conversations and good food make our communities feel a little more like home.
            </p>
            <li>Am I host material?</li>
            <p className="hosting-info-paragraphs">
              Anyone can host! (Get the reference?) If you love hosting dinner parties or organizing picnics or wine-tasting trips,
              this will be easy for you. If not, no worries! Our event set up and sign up is super easy to use.
            </p>
            <li>How can I get involved?</li>
            <p className="hosting-info-paragraphs">
              It's easy - just sign up with the button below, and start organizing events!
            </p>
          </ol>
          <h1 className="hosting-info-description"> Join us!</h1>
          {conditionalHostContent}
          {HostForm}
        </div>


      </div>
    );
  }
}



export default withRouter(Hosting);
