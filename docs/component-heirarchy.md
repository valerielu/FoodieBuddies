## Component Heirarchy

**AuthFormContainer**
 - AuthForm(For Sign up and Sign in)

**APPContainer**
  - Header
  - Footer

**HomeContainer**
  - HOME

**CitiesContainer**
 * CityIndex(linked to each city)

**CityContainer**
 - EventsIndex
 - HostsIndex


**EventContainer**
 - EventDetail
 - JoinEventButton

**NewEventContainer**
  - NewEvent
  - NewEventButton

**HostContainer**
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
| "/cities/:cityId" | "CityContainer" |
| "/hosting" | "NewHostContainer" |
| "/cities/:cityId/host/:hostdId" | "HostContainer" |
| "/dashboard" | "DashboardContainer" |
| "/userprofile" | "AccountContainer" |
