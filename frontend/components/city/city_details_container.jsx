import CityDetails from "./city_details.jsx";
import {connect} from "react-redux";
// import { selectToys } from '../../util/toy_selector';



const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    city: state.cities.cityDetails
  // toys: selectToys(state)
  };
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CityDetails);
