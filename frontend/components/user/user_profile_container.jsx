import UserProfile from "./user_profile.jsx";
import {connect} from "react-redux";
import {deleteAccount} from "../../actions/user_actions.js";

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  deleteAccount: (currentUser) => dispatch(deleteAccount(currentUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
