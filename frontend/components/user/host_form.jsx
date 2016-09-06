import React from "react";
import {withRouter} from "react-router";
import { Link } from 'react-router';
import Select from 'react-select';

class HostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: undefined,
      is_host: true,
      city_id: undefined,
      profile_pic_url: "",
      profile: undefined,
      cityName: undefined
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFields = this.updateFields.bind(this);
    this.cityOptions = this.cityOptions.bind(this);
    this.updateCityField = this.updateCityField.bind(this);
    this.handleAddPhoto = this.handleAddPhoto.bind(this);
    this.handleDeletePhoto = this.handleDeletePhoto.bind(this);

  }

  componentWillMount() {
    this.props.requestAllCities();
    this.props.receiveErrors();
  }

  componentDidUpdate() {
    if (this.props.currentUser.is_host) {
      this.props.router.push("/userprofile");
    }
  }

  updateFields (property) {
    return (e) => {
      this.setState({[property]: e.target.value});
    };
  }

  updateCityField (cityOption) {
    if (cityOption instanceof Array || !cityOption) {
      this.setState({city_id: undefined});
      this.setState({cityName: undefined});
    } else if (cityOption) {
      this.setState({city_id: parseInt(cityOption.value)});
      this.setState({cityName: cityOption});
    }
  }

  handleAddPhoto(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options, (error, images) => {
        if (error === null) {
          this.setState({profile_pic_url: images[0].url});
        }
    });
  }

  handleDeletePhoto() {
    this.setState({profile_pic_url: ""});
  }

  cityOptions () {
    if (this.props.cities) {
      let result = [];
      Object.keys(this.props.cities).map(id => {
        result.push({value: id, label: this.props.cities[id].name});
      });
      return result;
    } else {
      return undefined;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUser(this.state, this.props.currentUser);
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


    let profileThumbnailClass;
    if (!this.state.profile_pic_url || this.state.profile_pic_url.length === 0) {
      profileThumbnailClass = "hide-profile-pic-thumbnail";
    } else {
      profileThumbnailClass = "profile-pic-thumbnail";
    }

    return (
      <div className="new-host-form-container">
        <h1 className="new-host-form-title">Sign up to be a host!</h1>

        <ul className="host-form-errors">
          {errors}
        </ul>

        <form onSubmit={this.handleSubmit} className="new-host-form">
          <div className="form-input-container">
            <input className="form-firstname-input" type="text" onChange={this.updateFields("first_name")} value={this.state.firstname} placeholder="First Name"/>

          </div>

          <div className="form-input-container">

            <h1>Choose the city that you want to host in!</h1>

            <Select className="form-city-input" onChange={this.updateCityField} options={this.cityOptions()} value={this.state.cityName}/>
          </div>

          <div className="form-input-image-container">
            <button className="create-host-button" onClick={this.handleAddPhoto}><i className="fa fa-camera" aria-hidden="true"></i> Upload profile photo</button>
            <i className="fa fa-times" aria-hidden="true" onClick={this.handleDeletePhoto}></i>
            <img className={profileThumbnailClass} src={this.state.profile_pic_url} />
          </div>

          <div className="form-input-container">
            <textarea className="form-profile-input" onChange={this.updateFields("profile")} value={this.state.profile} placeholder="Tell us your story and favorite restaurants/foods?"></textarea>
          </div>

          <input className="create-host-button" type="submit" value="Submit" />
        </form>

      </div>
    );
  }
}

export default withRouter(HostForm);
