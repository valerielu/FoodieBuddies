import EventForm from "./event_form.jsx";
import {connect} from "react-redux";
import {createEvent, receiveEventErrors} from "../../actions/event_actions.js";

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: state.events.eventErrors
});

const mapDispatchToProps = (dispatch) => ({
  createEvent: (event) => (dispatch(createEvent(event))),
  receiveEventErrors: () => (dispatch(receiveEventErrors()))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
