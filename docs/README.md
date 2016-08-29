# FoodieBuddies

[Heroku link][heroku] **Note:** TBD (Will be up by end of Monday 8/29)

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

FoodieBuddies is a web application inspired by TeaWithStrangers built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Cities (view events and hosts at each city)
- [ ] Host Event (have users host and general users)
- [ ] Join Event in your city (user city)
- [ ] Dashboard of joined events/hosted events
- [ ] Google Map API showing events based on location
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

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Allow user update profile
- [ ] Review phase 1

### Phase 1.1: Users API (2 days)

**Objective:** Users profile can be updated through the API.

- [ ] `City` model
- [ ] Seed database with a small amount of test data
- [ ] API for notes (`UsersController`)
- [ ] JBuilder views for Users
- User components and respective Redux loops
  - [ ] `UserForm`
- [ ] Style users/edit components
- [ ] Seed Users

### Phase 2: Cities Model, API, and components (2 days)

**Objective:** Cities can be created and read through the API.

- [ ] `City` model
- [ ] Seed database with a small amount of test data
- [ ] API for notes (`CitiesController`)
- [ ] JBuilder views for cities
- City components and respective Redux loops
  - [ ] `CitiesIndex`
  - [ ] `CityIndexItem`
  - [ ] `CityForm`
- [ ] Style cities components
- [ ] Seed cities

### Phase 3: Events (2 days)

**Objective:** Event belong to City and Host that can be created, read, edited and destroyed through the API.

- [ ] `Event` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for notes (`EventsController`)
- [ ] JBuilder views for events
- [ ] Adding events requires a city
- [ ] Adding events requires a host(currentUser, if currentUser is a host)
- [ ] Viewing events by city (with google map API)
- Event components and respective Redux loops
  - [ ] `EventsIndex` (by city)
  - [ ] `EventIndexItem`
  - [ ] `EventForm`
- [ ] Style event components
- [ ] Seed events

### Phase 4: Hosts (1 days)

**Objective:** Hosts can be created and read through the API.

- [ ] `Host` model
- [ ] Seed database with a small amount of test data
- [ ] API for notes (`HostsController`)
- [ ] JBuilder views for hosts
- Host components and respective Redux loops
  - [ ] `HostsIndex`
  - [ ] `HostIndexItem`
  - [ ] `HostForm`
- [ ] Style hosts components
- [ ] Seed hosts

### Bonus Features (TBD)
- [ ] Search events by host
- [ ] Search events by city
- [ ] Set reminders on events
- [ ] Multiple sessions
