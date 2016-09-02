export const selectEvents = (state) => {
  const city = state.cities.city;
  return city && city.events ? Object.keys(city.events).map(eventId => {
    return city.events[eventId];
  }) : [];
};
