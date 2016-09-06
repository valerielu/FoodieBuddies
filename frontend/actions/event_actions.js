export const EventConstants = {
  REQUEST_ALL_EVENTS: "REQUEST_ALL_EVENTS",
  RECEIVE_ALL_EVENTS: "RECEIVE_ALL_EVENTS"
};

export const requestAllEvents = (currentUser) => ({
  type: EventConstants.REQUEST_ALL_EVENTS
});

export const receiveAllEvents = (events) => ({
  type: EventConstants.RECEIVE_ALL_EVENTS,
  events
});

export const createEvent = (events) => ({
  type: EventConstants.RECEIVE_ALL_EVENTS,
  events
});

export const updateEvent = (events) => ({
  type: EventConstants.RECEIVE_ALL_EVENTS,
  events
});

export const deleteEvent = (events) => ({
  type: EventConstants.RECEIVE_ALL_EVENTS,
  events
});

export const requestSingleEvent = (events) => ({
  type: EventConstants.RECEIVE_ALL_EVENTS,
  events
});

export const receiveSingleEvent = (events) => ({
  type: EventConstants.RECEIVE_ALL_EVENTS,
  events
});
