# Redux Structure

The application's state is organized by data type. Under each data type, there
may be sub-states. Each action is listed with the sequence of events that
results from its invocation, ending with the API or a reducer. Subscribed
components, i.e. containers, are listed at the end.

Using this document, you should be able to trace an **action** starting with
where it was invoked, through the **API**/**reducer** involved, and finally to
the **components** that update as a result. Once you start implementing your
Redux structure, you'll need to do the same.

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `Navbar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## City Cycles

### Cities API Request Actions

* `fetchAllCities`
  0. invoked from `CitiesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/cities` is called.
  0. `receiveAllCities` is set as the success callback.

* `fetchSingleCity`
  0. invoked from `CityDetail` `didMount`/`willReceiveProps`
  0. `GET /api/cities/:cityId` is called.
  0. `receiveSingleCity` is set as the success callback.


### Cities API Response Actions

* `receiveAllCities`
  0. invoked from an API callback.
  0. The `City` reducer updates `cities` in the application's state.

* `receiveSingleCity`
  0. invoked from an API callback.
  0. The `City` reducer updates `cities[id]` in the application's state.


## Event Cycles

### Events API Request Actions

* `fetchAllEvents`
  0. invoked from `CityContainer` `didMount`/`willReceiveProps`
  0. `GET /api/cities/:cityId/events` is called.
  0. `receiveAllEvents` is set as the success callback.

* `createEvent`
  0. invoked from new event button `onClick`
  0. `POST /api/cities/:cityId/events` is called.
  0. `receiveSingleEvent` is set as the success callback.

* `updateEvent`
  0. invoked from `EventForm` `onSubmit`
  0. `PATCH /api/cities/:cityId/events/:eventId` is called.
  0. `receiveSingleEvent` is set as the success callback.

* `destroyEvent`
  0. invoked from delete event button `onClick`
  0. `DELETE /api/cities/:cityId/events/:eventId` is called.
  0. `removeEvent` is set as the success callback.

### Events API Response Actions

* `receiveAllEvents`
  0. invoked from an API callback
  0. the `EventReducer` updates `events` in the application's state.

* `receiveSingleEvent`
  0. invoked from an API callback
  0. the `EventReducer` updates `events[id]` in the application's state.

* `removeEvent`
  0. invoked from an API callback
  0. the `EventReducer` removes `events[id]` from the application's state.


## Host Cycles

* `fetchAllHosts`
  0. invoked from `CityDetailsContainer` `didMount`/`willReceiveProps`
  0. `GET /api/cities/:cityId` is called. (through associations => city.hosts)
  0. `receiveAllHosts` is set as the success callback.

* `fetchSingleHost`
  0. invoked from `HostContainer` `didMount`/`willReceiveProps`
  0. `GET /api/cities/:cityId/hosts/:hostId` is called.
  0. `receiveSingleHost` is set as the success callback.

* `createHost`
  0. invoked from `NewHostContainer` submit
  0. `POST /api/cities/:cityId/hosts/` is called.
  0. `receiveSingleHost` is set as the success callback.  

* `updateHost`
  0. invoked from `AccountContainer` submit
  0. `POST /api/users/:userId` is called.
  0. `receiveSingleHost` is set as the success callback.  


### Hosts API Response Actions

* `receiveAllHosts`
  0. invoked from an API callback
  0. the `HostReducer` updates `hosts` in the application's state.

* `receiveSingleHost`
  0. invoked from an API callback
  0. the `HostReducer` updates `hosts[id]` in the application's state.


## Attendance Cycles

* `fetchAllEvents for a single user`
  0. invoked from `DashboardContainer` and `CityDetailsContainer` `didMount`/`willReceiveProps`
  0. `GET /api/events/:eventId/` is called. (through associations => city.events)
  0. `receiveAllEvents` is set as the success callback.
  0. Including attending and hosting events (if a host)

<!-- * `fetchSingleEvent`
  0. invoked from `HostContainer` `didMount`/`willReceiveProps`
  0. `GET /api/cities/:cityId/hosts/:hostId` is called.
  0. `receiveSingleHost` is set as the success callback. -->
