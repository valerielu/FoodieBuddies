import EventModal from "./event_modal.jsx";
import {connect} from "react-redux";
import {updateEvent, receiveEventErrors} from "../../actions/event_actions.js";

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: state.events.eventErrors
});

const mapDispatchToProps = (dispatch) => ({
  updateEvent: (eventId, event) => (dispatch(updateEvent(eventId, event))),
  receiveEventErrors: () => (dispatch(receiveEventErrors()))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventModal);
