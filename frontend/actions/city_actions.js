export const CityConstants = {
  REQUEST_ALL_CITIES: "REQUEST_ALL_CITIES",
  RECEIVE_ALL_CITIES: "RECEIVE_ALL_CITIES"
};

export const requestAllCities = () => ({
  type: CityConstants.REQUEST_ALL_CITIES,
});

export const receiveAllCities = (cities) => ({
  type: CityConstants.RECEIVE_ALL_CITIES,
  cities
});
