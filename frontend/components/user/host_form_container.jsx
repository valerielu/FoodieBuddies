import HostForm from "./host_form.jsx";
import {connect} from "react-redux";
import {requestAllCities} from "../../actions/city_actions.js";
import {createHost} from "../../actions/user_actions.js";
import {receiveErrors} from "../../actions/session_actions.js";

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  cities: state.cities.allcities,
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch) => ({
  requestAllCities: () => dispatch(requestAllCities()),
  createHost: (host, currentUser) => (dispatch(createHost(host, currentUser))),
  receiveErrors: () => dispatch(receiveErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(HostForm);
