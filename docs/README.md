# FoodieBuddies

[Heroku link][heroku]
[heroku]: https://foodiebuddies.herokuapp.com/

## Minimum Viable Product

FoodieBuddies is a web application inspired by TeaWithStrangers built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [X] Hosting on Heroku
- [X] New account creation, login, and guest/demo login
- [X] Cities (view events and hosts at each city)
- [X] Users can become hosts
- [ ] Hosts can create events
- [X] Join Events
- [X] Dashboard of joined events/hosted events
- [ ] Production README


## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-heirarchy.md
[redux-structure]: redux-structure.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [X] New Rails project
- [X] `User` model/migration
- [X] Back end authentication (session/password)
- [X] `StaticPages` controller and root view
- [X] Webpack & react/redux modules
- [X] `APIUtil` to interact with the API
- [X] Redux cycle for frontend authentication
- [X] User signup/signin components
- [X] Blank landing component after signup/signin
- [X] Style signup/signin components
- [X] Seed users/hosts

### Phase 1.1: Users API (1 day)

**Objective:** Users profile can be updated through the API.

- [X] `User` model
- [X] Seed database with a small amount of test data
- [X] API for users (`UsersController`)
- [X] JBuilder views for Users
- User components and respective Redux loops
  - [X] `UserForm` (essentially delete button)
- [X] Allow user/host delete profile
- [ ] Style users/edit components

### Phase 2: Cities Model, API, and components (1 day)

**Objective:** Cities can be read through the API.

- [X] `City` model
- [X] Seed database with a small amount of test data
- [X] API for cities (`CitiesController`)
- [X] JBuilder views for cities
- City components and respective Redux loops
  - [X] `CitiesIndex`
  - [X] `CityIndexItem`
  - [X] `CityDetails`
- [X] Style cities components
- [X] Seed cities

### Phase 3: Events (2 days)

**Objective:** Event belong to City and Host that can be created, read, edited and destroyed through the API.

- [X] `Event` model
- [X] Seed database with a small amount of test data
- [X] CRUD API for events (`EventsController`)
- [X] JBuilder views for events
- [X] Adding events requires a city
- [X] Adding events requires a host(currentUser, if currentUser is a host)
- [X] Viewing events by city
- Event components and respective Redux loops
  - [X] `EventItem`(by city on city details and by user on dashboard)
  - [ ] `NewEventForm`
  - [ ] `EditEventForm` (modal)
- [ ] Style event components
- [ ] Seed events

### Phase 4: Attendances (1 day)

**Objective:** User's event attendance can be created and read through the API.

- [X] Seed database with a small amount of test data
- [X] API for attendances (`AttendancesController`)
- [X] JBuilder views for event attendance
- Attendance components and respective Redux loops
  - [X] `AttendButton`
  - [X] `UnAttendButton`
- [ ] Seed attendances

### Phase 5: Hosts (1 day)

**Objective:** Hosts can be created and read through the API.

- [X] Seed database with a small amount of test data (special users as Hosts)
- [X] API for hosts (`UsersController`)
- [X] JBuilder views for hosts
- Host components and respective Redux loops
  - [X] `Hosting`
  - [X] `HostItem`
  - [X] `HostForm` (create a host => updating a user)
  - [X] `HostDetail`
  - [X] `UpdateHostInfo` (inside profile for hosts)
- [ ] Style hosts components
- [ ] Seed hosts

### Phase 6: Events Map integration (1 day)
- [ ] Viewing events by city to pull up a city map and mark all the events
- [ ] Add events by address to add new markers on map

### Bonus Features (TBD)
- [ ] Search events by type of food (make them tags)
- [ ] Set reminders on events (google calendar API)
- [ ] Submit Cit suggestions
- [ ] Google Map API showing events based on location
- [ ] Events and hosts ratings
- [ ] Yelp API integration for restaurant inspirations and event details
