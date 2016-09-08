import EventForm from "./event_form.jsx";
import {connect} from "react-redux";
import {createEvent, updateEvent} from "../../actions/event_actions.js";

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: state.events.eventErrors
});

const mapDispatchToProps = (dispatch) => ({
  // updateEvent: (event) => (dispatch(updateEvent(event))),
  createEvent: (event) => (dispatch(createEvent(event)))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
