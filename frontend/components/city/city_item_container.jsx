import CityItem from "./city_item.jsx";
import {connect} from "react-redux";
import {requestSingleCity} from '../../actions/city_actions.js';


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  requestSingleCity: (cityId) => (dispatch(requestSingleCity(cityId)))
});

export default connect(mapStateToProps, mapDispatchToProps)(CityItem);
