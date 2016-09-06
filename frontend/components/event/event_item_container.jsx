import EventItem from "./event_item.jsx";
import {connect} from "react-redux";
import {attendEvent, unattendEvent, deleteEvent, updateEvent} from "../../actions/event_actions.js";


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  deleteEvent: (eventId) => (dispatch(deleteEvent(eventId))),
  updateEvent: (eventId, event) => (dispatch(updateEvent(eventId, event))),
  attendEvent: (attendance) => (dispatch(attendEvent(attendance))),
  unattendEvent: (eventId, userId) => (dispatch(unattendEvent(eventId, userId)))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventItem);
