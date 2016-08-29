```json
{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createEvent: {errors: ["date can't be blank", "time can't be blank", "location can't be blank", "limit can't be blank"]}
  },
  cities: {
    1: {
      id: 1
      name: "Durham",
      state: "NC",
      country: "USA",
    }
  },
  events: {
    1: {
      id: 1
      date: "20160831",
      time: "19:30:00 PDT",
      location: "123 restaurant, Durham, NC",
      limit: 20,
      description: "is yummy",
      city_id: 2,
      host_id: 12
    }
  }
}
```
