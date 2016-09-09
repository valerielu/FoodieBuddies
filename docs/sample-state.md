json
{
  session: {
    currentUser: {
      id: 1,
      username: "app-academy",
      is_host: false
    },
    errors: ["error1", "error2"] => including sign up/log in errors and update user (host create and update) errors
  },
  forms: {
    eventForm: {
      errors: ["date_time can't be blank", "time can't be blank", "address can't be blank", "limit can't be blank"]
    }
  },
  cities: {
    1: {
      id: 1
      name: "Durham",
      state: "NC",
      country: "USA",
      hosts: {
        1: {
          username: "greathost",
          first_name: "Daniel"
          profile: "life story of great host",
          profile_pic_url: "hostpic/123",
          city_id: 1
        }
      }
      events: {
        1: {
          id: 1
          date: "20160831",
          time: "19:30:00 PDT",
          address: "123 restaurant, Durham, NC",
          limit: 20,
          description: "is yummy",
          city_id: 2,
          host_id: 12
        }
      }
    }
  },
  events: {
    attendingEvents: {
      1: {
        id: 1
        date: "20160831",
        time: "19:30:00 PDT",
        address: "123 restaurant, Durham, NC",
        limit: 20,
        description: "is yummy",
        city_id: 2,
        host_id: 12,
        attendees: [1, 6]
      }
    },
    hostedEvents: {
      3: {
        id: 2
        date: "20160831",
        time: "19:30:00 PDT",
        address: "123 restaurant, Durham, NC",
        limit: 20,
        description: "is yummy",
        city_id: 2,
        host_id: 12,
        attendees: [2, 5, 7]
      }
    }
  }
  users: {
    host: {
      1: {
        id: 1,
        username: "JaneDoe",
        is_host: true,
        ...


        ...
      }
    }
  }
}
