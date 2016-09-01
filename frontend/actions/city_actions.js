export const CityConstants = {
  REQUEST_ALL_CITIES: "REQUEST_ALL_CITIES",
  RECEIVE_ALL_CITIES: "RECEIVE_ALL_CITIES",
  REQUEST_SINGLE_CITY: "REQUEST_SINGLE_CITY",
  RECEIVE_SINGLE_CITY: "RECEIVE_SINGLE_CITY"
};

export const requestAllCities = () => ({
  type: CityConstants.REQUEST_ALL_CITIES,
});

export const receiveAllCities = (cities) => ({
  type: CityConstants.RECEIVE_ALL_CITIES,
  cities
});

export const requestSingleCity = (cityId) => ({
  type: CityConstants.REQUEST_SINGLE_CITY,
  cityId
});

export const receiveSingleCity = (city) => ({
  type: CityConstants.RECEIVE_SINGLE_CITY,
  city
});
