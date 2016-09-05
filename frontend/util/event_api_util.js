export const requestAllEvents = (success, error) => {
  $.ajax({
    method: "GET",
    url: "api/events",
    dataType: "json",
    success,
    error
  });
};
