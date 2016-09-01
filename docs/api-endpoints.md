# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`
- `DELETE /api/users/:id`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Cities

- `GET /api/cities`
  - Cities index
- `GET /api/cities/:id`
  - Show page a city (all the events and hosts will be listed as well)

### Events

- `GET /api/cities/:id/events`
  - List of all events of a city
- `POST /api/cities/:id/events`
  - Creating an event
- `PATCH /api/cities/:id/events/:id`
  - Updating an event
- `DELETE /api/cities/:id/events/:id`
  - Canceling an event

### Hosts

- `GET /api/cities/:id/hosts`
  - List of all hosts of a city
- `POST /api/cities/:id/hosts`
  - Becoming a host
