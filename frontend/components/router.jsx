import React from "react";
import {Router, Route, IndexRoute, hashHistory, browserHistory} from "react-router";
import App from "./app.jsx";
import SessionFormContainer from "./session/session_form_container.jsx";
import HomeContainer from "./home_container.jsx";
import CitiesContainer from "./city/cities_container.jsx";
import UserProfileContainer from "./user/user_profile_container.jsx";
import CityDetailsContainer from "./city/city_details_container.jsx";
import {requestSingleCity} from "../actions/city_actions.js";

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    this.requestSingleCityDetails = this.requestSingleCityDetails.bind(this);
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
      replace('/');
    }
  }

  requestSingleCityDetails(nextState, replace) {
    this.context.store.dispatch(requestSingleCity(nextState.params.cityId));
  }

  render(){
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ HomeContainer }/>
          <Route path="/login" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn} />
          <Route path="/signup" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn} />
          <Route path="/hosting" component={ CitiesContainer } />
          <Route path="/cities" component={ CitiesContainer } />
          <Route path="/cities/:cityId" component={ CityDetailsContainer } onEnter={this.requestSingleCityDetails}/>
          <Route path="/dashboard" component={ CitiesContainer } onEnter={this._ensureLoggedIn}/>
          <Route path="/userprofile" component={ UserProfileContainer } onEnter={this._ensureLoggedIn}/>
        </Route>
      </Router>
    );
  }
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;
