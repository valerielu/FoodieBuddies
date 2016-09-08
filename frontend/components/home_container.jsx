import Home from "./home.jsx";
import {connect} from "react-redux";
import {login, signup} from "../actions/session_actions.js";

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
