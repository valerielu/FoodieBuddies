json
{
  session: {
    currentUser: {
      id: 1,
      username: "app-academy",
      is_host: false
    },
    errors: ["error1", "error2"]
  },
  forms: {
    createHost: {
      //maybe these belong in the currentUser errors?
    },
    createEvent: {
      errors: ["date can't be blank", "time can't be blank", "location can't be blank", "limit can't be blank"]
    },
    updateHost: {
      //maybe these belong in the currentUser errors?
    },
    updateEvent: {

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
          location: "123 restaurant, Durham, NC",
          limit: 20,
          description: "is yummy",
          city_id: 2,
          host_id: 12
        }
      }
    }
  },
  dashboard: {
    attendingEvents: {
      1: {
        id: 1
        date: "20160831",
        time: "19:30:00 PDT",
        location: "123 restaurant, Durham, NC",
        limit: 20,
        description: "is yummy",
        city_id: 2,
        host_id: 12,
      }
    },
    hostedEvents: {
      3: {
        id: 2
        date: "20160831",
        time: "19:30:00 PDT",
        location: "123 restaurant, Durham, NC",
        limit: 20,
        description: "is yummy",
        city_id: 2,
        host_id: 12,
        attendees: {
          1: {
            id: 2,
            username: "valpal123"
          }
        }
      }
    }
  }

}
