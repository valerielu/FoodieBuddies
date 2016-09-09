## Component Heirarchy

**AuthFormContainer**
 - AuthForm(For Sign up and Sign in)

**AppContainer**
  - Header
  - Footer

**HomeContainer**
  - Home

**CitiesContainer**
 - Cities
  - CityItem

**CityDetailContainer**
 - EventsIndex
 - HostsIndex

**EventContainer**
 - EventDetail
 - JoinEventButton (or for a host, delete or update event buttons)

**NewEventContainer**
  - NewEvent (form - only for hosts)
  - CreateEventButton

**HostContainer**
 - HostInfo
 - NewHostContainer

 **HostDetailContainer**
  - HostDetail

**NewHostContainer**
  - NewHost (form)
  - CreateHostButton

**DashboardContainer**
 - AttendingEventsContainer
   - EventDetail
   - UnattendEventButton

 - HostingEventsIndex
   - EventDetail
   - UpdateEventButton
   - DeleteEventButton

 **AccountContainer**
  - EditUserForm
  - UpdateUserButton
  - DeleteUserButton
  - For hosts, a update host profile form

## Routes

|Path   | Component   |
|-------|-------------|
| "/signup" | "AuthFormContainer" |
| "/login" | "AuthFormContainer" |
| "/"        | "HomeContainer" | (index route)
| "/cities"  | "CitiesContainer" |
| "/cities/:cityId" | "CityDetailContainer" |
| "/hosting" | "HostContainer" |
| "/cities/:cityId/host/:hostdId" | "HostDetailContainer" |
| "/dashboard" | "DashboardContainer" |
| "/useraccount" | "AccountContainer" |
| "/events/new" | "NewEventContainer" |
