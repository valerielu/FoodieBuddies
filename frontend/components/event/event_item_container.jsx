import EventItem from "./event_item.jsx";
import {connect} from "react-redux";
// import {requestAllCities} from "../../actions/city_actions.js";


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(EventItem);
