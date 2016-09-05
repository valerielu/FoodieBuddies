import HostDetails from "./host_details.jsx";
import {connect} from "react-redux";
import {requestSingleCity} from '../../actions/city_actions.js';


const mapStateToProps = (state) => ({
  city: state.cities.city
});

const mapDispatchToProps = (dispatch) => ({
  requestSingleCity: (cityId) => (dispatch(requestSingleCity(cityId)))
});


export default connect(mapStateToProps, mapDispatchToProps)(HostDetails);
