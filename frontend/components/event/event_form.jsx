import React from "react";
import {withRouter} from "react-router";
import { Link } from 'react-router';
// import 'react-select/dist/react-select.css';
import Select from 'react-select';
// import 'react-date-picker/index.css';
// import { DateField, Calendar } from 'react-date-picker';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: undefined,
      is_host: true,
      city_id: undefined,
      profile_pic_url: "",
      profile: undefined,
      cityName: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFields = this.updateFields.bind(this);
    this.cityOptions = this.cityOptions.bind(this);
    this.updateCityField = this.updateCityField.bind(this);
    this.handleAddPhoto = this.handleAddPhoto.bind(this);

  }

  componentWillMount(){
    this.props.requestAllCities();
    this.props.receiveErrors();
  }

  updateFields (property) {
    return (e) => {
      this.setState({[property]: e.target.value});
    };
  }

  updateCityField (cityOption) {
    this.setState({city_id: parseInt(cityOption.value)});
    this.setState({cityName: cityOption.label});
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
    this.props.createHost(this.state, this.props.currentUser);
  }

  render () {

    let errors;
    if (this.props.errors) {
      errors = this.props.errors.map((error, idx) => (
        <li key={idx}>{error}</li>
      ));
    } else {
      errors = [];
    }

    // const onChange = (dateString, { dateMoment, timestamp }) => {
    //   console.log(dateString);
    // };
    //
    // let date = '2017-04-24';
    // <Calendar
    //   dateFormat="YYYY-MM-DD"
    //   date={date}
    //   onChange={onChange}
    // />
    //
    // <DateField
    //   dateFormat="YYYY-MM-DD hh:mm a"
    //   forceValidDate={true}
    //   updateOnDateClick={true}
    //   defaultValue={1473053015232}
    // >
    //   <DatePicker
    //     navigation={true}
    //     locale="en"
    //     forceValidDate={true}
    //     highlightWeekends={true}
    //     highlightToday={true}
    //     weekNumbers={true}
    //     weekStartDay={0}
    //   />
    // </DateField>

// :date, :time, :location, :limit, :host_id, :city_id, :food_type, :restaurant, :yelp_link, :lat, :lng

    return (
      <div className="new-event-form-container">
        <h1 className="new-event-form-title">Create a new event</h1>

        <ul className="event-form-errors">
          {errors}
        </ul>

        <form onSubmit={this.handleSubmit} className="new-event-form">
          <div className="form-input-container">
            <input className="form-firstname-input" type="text" onChange={this.updateFields("first_name")} value={this.state.firstname} placeholder="First Name"/>

          </div>

          <div className="form-input-container">

            <h1>Choose the city that you want to event in!</h1>
            <Select className="form-city-input" onChange={this.updateCityField} options={this.cityOptions()} value={this.state.cityName}/>
          </div>

          <div className="form-input-container">
            <button className="create-event-button" onClick={this.handleAddPhoto}><i className="fa fa-camera" aria-hidden="true"></i> Upload profile photo</button>
          </div>

          <div className="form-input-container">
            <textarea className="form-profile-input" onChange={this.updateFields("profile")} value={this.state.profile}></textarea>
          </div>

          <input className="create-host-button" type="submit" value="Submit" />
        </form>

      </div>
    );
  }
}

export default withRouter(EventForm);
