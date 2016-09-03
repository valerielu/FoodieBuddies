import HostForm from "./host_form.jsx";
import {connect} from "react-redux";
import {requestAllCities} from "../../actions/city_actions.js";

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  cities: state.cities.allcities
});

const mapDispatchToProps = (dispatch) => ({
  requestAllCities: () => (dispatch(requestAllCities()))
});

export default connect(mapStateToProps, mapDispatchToProps)(HostForm);
