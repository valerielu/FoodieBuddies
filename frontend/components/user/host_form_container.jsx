import HostForm from "./host_form.jsx";
import {connect} from "react-redux";
//might need submission from host form

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(HostForm);
