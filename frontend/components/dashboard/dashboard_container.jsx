import Dashboard from "./dashboard.jsx";
import {connect} from "react-redux";
import {requestAllEvents} from "../../actions/event_actions.js";


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  events: state.events
});

const mapDispatchToProps = (dispatch) => ({
  requestAllEvents: () => (dispatch(requestAllEvents()))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
