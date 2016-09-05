import UserProfile from "./user_profile.jsx";
import {connect} from "react-redux";
import {deleteAccount, updateUser} from "../../actions/user_actions.js";
import {receiveErrors} from "../../actions/session_actions.js";

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch) => ({
  deleteAccount: (currentUser) => dispatch(deleteAccount(currentUser)),
  updateUser: (host, currentUser) => dispatch(updateUser(host, currentUser)),
  receiveErrors: () => dispatch(receiveErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
