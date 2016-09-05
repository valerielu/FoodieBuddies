import React from "react";
import {Router, Route, IndexRoute, hashHistory, browserHistory} from "react-router";
import App from "./app.jsx";
import SessionFormContainer from "./session/session_form_container.jsx";
import HomeContainer from "./home_container.jsx";
import CitiesContainer from "./city/cities_container.jsx";
import UserProfileContainer from "./user/user_profile_container.jsx";
import CityDetailsContainer from "./city/city_details_container.jsx";
import {requestSingleCity} from "../actions/city_actions.js";
import HostingContainer from "./user/hosting_container.jsx";
import HostFormContainer from "./user/host_form_container.jsx";
import HostDetailsContainer from "./user/host_details_container.jsx";
import EventFormContainer from "./event/event_form_container.jsx";


class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    // this.requestSingleCityDetails = this.requestSingleCityDetails.bind(this);
  }

  _ensureLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  }

  _redirectIfLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (currentUser) {
      replace('/'); //change this to reroute to the last page they were on
      //before being redirected to log in instead of just the home page
    }
  }

  // requestSingleCityDetails(nextState, replace) {
  //   this.context.store.dispatch(requestSingleCity(nextState.params.cityId));
  //   // onEnter={this.requestSingleCityDetails}
  // }  //moved this request to on click of the city image and the rediect in the middle ware

  render(){
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ HomeContainer }/>
          <Route path="/login" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn} />
          <Route path="/signup" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn} />
          <Route path="/hosting" component={ HostingContainer } >
            <Route path="/hosting/new" component={ HostFormContainer } onEnter={this._ensureLoggedIn}/>
          </Route>
          <Route path="/cities" component={ CitiesContainer } />
          <Route path="/cities/:cityId" component={ CityDetailsContainer } onEnter={this._ensureLoggedIn}/>
          <Route path="/cities/:cityId/hosts/:hostId" component={ HostDetailsContainer } onEnter={this._ensureLoggedIn}/>
          <Route path="/dashboard" component={ CitiesContainer } onEnter={this._ensureLoggedIn}/>
          <Route path="/userprofile" component={ UserProfileContainer } onEnter={this._ensureLoggedIn}/>
          <Route path="/events/new" component={ EventFormContainer } onEnter={this._ensureLoggedIn}/>
        </Route>
      </Router>
    );
  }
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;
