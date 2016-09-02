export const selectHosts = (state) => {
  const city = state.cities.city;
  return city && city.hosts ? Object.keys(city.hosts).map(hostId => {
    return city.hosts[hostId];
  }) : [];
};
