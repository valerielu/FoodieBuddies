export const selectEvents = (state) => {
  const city = state.cities.city;
  return city && city.events ? city.event_order.map(eventId => {
    return city.events[eventId];
  }) : [];
};
