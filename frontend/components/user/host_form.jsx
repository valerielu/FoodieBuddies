import React from "react";
import {withRouter} from "react-router";
import { Link } from 'react-router';
import Select from 'react-select';
// import 'react-select/dist/react-select.css';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      is_host: true,
      city_id: undefined, //will this be a problem later for validation??
      //since undefined might read in as a valid value
      profile_pic_url: "",
      profile: ""

    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFields = this.updateFields.bind(this);
    this.cityOptions = this.cityOptions.bind(this);
    this.updateCityField = this.updateCityField.bind(this);
    this.handleAddPhoto = this.handleAddPhoto.bind(this);

  }

  componentDidMount(){
    this.props.requestAllCities();
  }

  updateFields (property) {
    return (e) => {
      this.setState({[property]: e.target.value});
    };
  }

  updateCityField (cityOption) {
    this.setState({city_id: parseInt(cityOption.value)});
  }

  handleAddPhoto() {

  }

  cityOptions () {
    if (this.props.cities) {
      let result = [];
      Object.keys(this.props.cities).map(id => {
        result.push({value: id, label: this.props.cities[id].name});
      });
      return result;
    } else {
      return [];
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.createHost(this.state);
  }

  render () {
    return (
      <div className="new-host-form-container">
        <h1 className="new-host-form-title">Sign up to be a host!</h1>

        <form onSubmit={this.handleSubmit} className="new-host-form">
          <div className="form-input-container">
            <input type="text" onChange={this.updateFields("firstname")} value={this.state.firstname} className="form-firstname-input" placeholder="First Name"/>

          </div>

          <div className="form-input-container">

            <h1>Choose the city that you want to host in!</h1>
            <Select onChange={this.updateCityField} options={this.cityOptions()} />
          </div>


          <div className="form-input-container">
            <textarea className="form-profile-input" cols="30" rows="10">{this.state.profile}</textarea>
          </div>


          <div className="form-input-container">

            <button className="create-event-button" onClick={this.handleAddPhoto}><i className="fa fa-camera" aria-hidden="true"></i> Upload profile photo</button>
          </div>

          <input className="create-host-button" type="submit" value="Make me a host" />
        </form>

      </div>
    );
  }
}

export default withRouter(SessionForm);
