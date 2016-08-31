import Home from "./home.jsx";
import {connect} from "react-redux";
import {login, logout, signup} from "../../actions/session_actions.js";

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(Home);
