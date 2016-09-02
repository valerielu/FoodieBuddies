import CityDetails from "./city_details.jsx";
import {connect} from "react-redux";
import {selectEvents} from '../../util/event_selector.js';
import {selectHosts} from '../../util/host_selector.js';
import {requestSingleCity} from '../../actions/city_actions.js';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    city: state.cities.city,
    events: selectEvents(state),
    hosts: selectHosts(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestSingleCity: (cityId) => (dispatch(requestSingleCity(cityId)))
});

export default connect(mapStateToProps, mapDispatchToProps)(CityDetails);
