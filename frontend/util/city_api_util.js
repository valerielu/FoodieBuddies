export const requestAllCities = (success, error) => {
  $.ajax({
    method: "GET",
    url: "api/cities",
    dataType: "json",
    success,
    error
  });
};

export const requestSingleCity = (cityId, success, error) => {
  $.ajax({
    method: "GET",
    url: `api/cities/${cityId}`,
    dataType: "json",
    success,
    error
  });
};
