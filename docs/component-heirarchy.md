## Component Heirarchy

**AuthFormContainer**
 - AuthForm(For Sign up and Sign in)

**AppContainer**
  - Header
  - Footer

**HomeContainer**
  - Home

**CitiesContainer**
 * CityIndex(linked to each city)

**CityDetailContainer**
 - EventsIndex
 - HostsIndex

**EventContainer**
 - EventDetail
 - JoinEventButton

**NewEventContainer**
  - NewEvent
  - NewEventButton

**HostContainer**
 - HostInfo
 - NewHostContainer

 **HostDetailContainer**
  - HostDetail

**NewHostContainer**
  - NewHost
  - NewHostButton

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
| "/userprofile" | "AccountContainer" |
| "/events/new" | "NewEventContainer" |
