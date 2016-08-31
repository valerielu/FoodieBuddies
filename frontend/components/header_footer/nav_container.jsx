import Nav from "./nav.jsx";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

export default connect(mapStateToProps)(Nav);
