import EventForm from "./event_form.jsx";
import {connect} from "react-redux";
import {createEvent} from "../../actions/event_actions.js";

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  // errors: state.forms.eventForm
});

const mapDispatchToProps = (dispatch) => ({
  // updateEvent
  createEvent: (event) => (dispatch(createEvent(event)))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
