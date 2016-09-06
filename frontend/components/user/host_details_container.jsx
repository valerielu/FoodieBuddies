import HostDetails from "./host_details.jsx";
import {connect} from "react-redux";
import {requestSingleUser} from '../../actions/user_actions.js';


const mapStateToProps = (state) => ({
  host: state.users.host
});

const mapDispatchToProps = (dispatch) => ({
  requestSingleUser: (userId) => (dispatch(requestSingleUser(userId)))
});


export default connect(mapStateToProps, mapDispatchToProps)(HostDetails);
