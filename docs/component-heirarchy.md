## Component Heirarchy

**AuthFormContainer**
 - AuthForm(For Sign up and Sign in)

**HomeContainer**
 - Header
 - Home
 - Footer

**CitiesContainer**
 * CityIndex(linked to each city)

**CityContainer**
 - EventsIndex
 - HostsIndex

**NewCityContainer**
 - NewCity
 - NewCityButton

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
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/" | "HomeContainer" |
| "/cities" | "CitiesContainer" |
| "/cities/:cityId" | "CityContainer" |
| "/hosting" | "NewHostContainer" |
| "/cities/:cityId/host/:hostdId" | "HostContainer" |
| "/dashboard" | "DashboardContainer"
