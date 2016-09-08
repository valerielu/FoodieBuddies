export const EventConstants = {
  REQUEST_ALL_EVENTS: "REQUEST_ALL_EVENTS",
  RECEIVE_ALL_EVENTS: "RECEIVE_ALL_EVENTS",
  CREATE_EVENT: "CREATE_EVENT",
  UPDATE_EVENT: "UPDATE_EVENT",
  DELETE_EVENT: "DELETE_EVENT",
  REQUEST_SINGLE_EVENT: "REQUEST_SINGLE_EVENT",
  RECEIVE_SINGLE_EVENT: "RECEIVE_SINGLE_EVENT",
  SUBTRACT_EVENT: "SUBTRACT_EVENT",
  MERGE_EVENT: "MERGE_EVENT",
  ATTEND_EVENT: "ATTEND_EVENT",
  UNATTEND_EVENT: "UNATTEND_EVENT",
  ADD_EVENT_ATTENDEE: "ADD_EVENT_ATTENDEE",
  SUBTRACT_EVENT_ATTENDEE: "SUBTRACT_EVENT_ATTENDEE",
  ADD_CITY_EVENT_ATTENDEE: "ADD_CITY_EVENT_ATTENDEE",
  SUBTRACT_CITY_EVENT_ATTENDEE: "SUBTRACT_CITY_EVENT_ATTENDEE",
  RECEIVE_EVENT_ERRORS: "RECEIVE_EVENT_ERRORS"

};

export const requestAllEvents = (currentUser) => ({
  type: EventConstants.REQUEST_ALL_EVENTS
});

export const receiveAllEvents = (events) => ({
  type: EventConstants.RECEIVE_ALL_EVENTS,
  events
});

export const createEvent = (event) => ({
  type: EventConstants.CREATE_EVENT,
  event
});

export const updateEvent = (eventId, event) => ({
  type: EventConstants.UPDATE_EVENT,
  eventId,
  event
});

export const deleteEvent = (eventId) => ({
  type: EventConstants.DELETE_EVENT,
  eventId
});

export const attendEvent = (attendance) => ({
  type: EventConstants.ATTEND_EVENT,
  attendance
});

export const unattendEvent = (eventId, userId) => ({
  type: EventConstants.UNATTEND_EVENT,
  eventId,
  userId
});

export const requestSingleEvent = (eventId) => ({
  type: EventConstants.REQUEST_SINGLE_EVENT,
  eventId
});

export const receiveSingleEvent = (event) => ({
  type: EventConstants.RECEIVE_SINGLE_EVENT,
  event
});

export const receiveEventErrors = (errors) => ({
  type: EventConstants.RECEIVE_EVENT_ERRORS,
  errors
});


export const subtractEvent = (eventId) => ({
  type: EventConstants.SUBTRACT_EVENT,
  eventId
});

export const mergeEvent = (event) => ({
  type: EventConstants.MERGE_EVENT,
  event
});

export const addEventAttendee = (data) => ({
  type: EventConstants.ADD_EVENT_ATTENDEE,
  data
});

export const subtractEventAttendee = (eventId, userId) => ({
  type: EventConstants.SUBTRACT_EVENT_ATTENDEE,
  eventId,
  userId
});
