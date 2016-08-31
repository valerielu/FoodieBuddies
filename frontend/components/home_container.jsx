import Home from "./home.jsx";
import {connect} from "react-redux";
import {logout} from "../actions/session_actions.js";

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

export default connect(mapStateToProps)(Home);
