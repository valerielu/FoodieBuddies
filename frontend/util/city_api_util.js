export const requestAllCities = (success, error) => {
  $.ajax({
    method: "GET",
    url: "api/cities",
    dataType: "json",
    success,
    error
  });
};
