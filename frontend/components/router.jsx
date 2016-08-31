import React from "react";
import {Router, Route, IndexRoute, hashHistory, browserHistory} from "react-router";
import App from "./app.jsx";
import SessionFormContainer from "./session/session_form_container.jsx";
import HomeContainer from "./home_container.jsx";
import CitiesContainer from "./city/cities_container.jsx";

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
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

  render(){
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ HomeContainer }/>
          <Route path="/login" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn} />
          <Route path="/signup" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn} />
          <Route path="/cities" component={ CitiesContainer } />
          <Route path="/dashboard" component={ CitiesContainer } onEnter={this._ensureLoggedIn}/>
          <Route path="/hosting" component={ CitiesContainer } />
          <Route path="/userprofile" component={ CitiesContainer } onEnter={this._ensureLoggedIn}/>
        </Route>
      </Router>
    );
  }
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;
