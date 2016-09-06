import EventItem from "./event_item.jsx";
import {connect} from "react-redux";
import {attendEvent, unattendEvent, deleteEvent, updateEvent} from "../../actions/event_actions.js"


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  deleteEvent:
  updateEvent:
  attendEvent:
  unattendEvent:
});

export default connect(mapStateToProps, mapDispatchToProps)(EventItem);
