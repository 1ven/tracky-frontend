const middleware = createShelfMiddleware(rootApi, config, enhancer);

const rootApi = {
  entities: {
    tickets: {
      readAll: {
        url: "/entities/tickets/",
        method: "GET",
        reduce: {
          [type(readAllTickets, "request")]: (state, action) => state
        },
        config
      }
    },
    projects: {
      readAll: {
        url: "/entities/projects",
        method: "GET"
      }
    }
  }
};

const readAllTickets = api => api.entities.tickets.readAll;

dispatch(
  request(readAllTickets, {
    params: {},
    body: {}
  })
);

select(readAllTickets, "isFetching");

type(readAllTickets, "request");
