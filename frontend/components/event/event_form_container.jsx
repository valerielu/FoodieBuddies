import EventForm from "./event_form.jsx";
import {connect} from "react-redux";
import {createEvent} from "../../actions/event_actions.js";

const mapStateToProps = (state) => ({
  // currentUser: state.session.currentUser,
  // cities: state.cities.allcities,
  // errors: state.session.errors
});

const mapDispatchToProps = (dispatch) => ({
  createEvent: (event) => (dispatch(createEvent(event)))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
