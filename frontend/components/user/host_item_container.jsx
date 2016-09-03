import HostItem from "./host_item.jsx";
import {connect} from "react-redux";


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});


export default connect(mapStateToProps)(HostItem);
