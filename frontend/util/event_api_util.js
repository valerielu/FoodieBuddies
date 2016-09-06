export const requestAllEvents = (success, error) => {
  $.ajax({
    method: "GET",
    url: "api/events",
    dataType: "json",
    success,
    error
  });
};
export const requestSingleEvent = (eventId, success, error) => {
  $.ajax({
    method: "GET",
    url: `api/events/${eventId}`,
    dataType: "json",
    success,
    error
  });
};
export const createEvent = (event, success, error) => {
  $.ajax({
    method: "POST",
    url: `api/events`,
    data: {event: event},
    dataType: "json",
    success,
    error
  });
};

export const deleteEvent = (eventId, success, error) => {
  $.ajax({
    method: "DELETE",
    url: `api/events/${eventId}`,
    dataType: "json",
    success,
    error
  });
};

export const updateEvent = (eventId, event, success, error) => {
  $.ajax({
    method: "PATCH",
    url: `api/events/${eventId}`,
    data: {event: event},
    dataType: "json",
    success,
    error
  });
};

export const attendEvent = (attendance, success, error) => {
  $.ajax({
    method: "POST",
    url: "api/attendances",
    data: {attendance: attendance},
    dataType: "json",
    success,
    error
  });
};

export const unattendEvent = (eventId, success, error) => {
  $.ajax({
    method: "DELETE",
    url: `api/attendances/${eventId}`,
    dataType: "json",
    success,
    error
  });
};
