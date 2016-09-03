import Hosting from "./hosting.jsx";
import {connect} from "react-redux";


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Hosting);
