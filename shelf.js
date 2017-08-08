const twitterApi = createApi({
  tweets: {
    read: {
      url: "/tweets",
      method: "GET"
    }
  }
}, config, {
  selector: (state) => state.twitter,
  context: 'twitter/abc'
})

const gitHubApi = createApi({
  repos: {
    read: {
      url: "/repos",
      method: "GET"
    }
  }
}, config, {
  selector: (state) => state.gitHub
})

const middleware = createShelfMiddleware([gitHubApi, twitterApi]);

const middleware = createShelfMiddleware([rootApi]);

// redux-shelf should implement vanilla redux logic
// if need normalizr support - do this with enhancers
const rootApi = createApi({
  entities: {
    tickets: {
      readAll: {
        url: "/entities/tickets/",
        method: "GET",
        // prob have regular reducer
        // reducer: (state, action) => {},
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
}, config, { enhancer });

const apiReducer = createApiReducer(rootApi);

const reducer = (state, action) => {}
const reducer2 = (state, action) => {}

const reducer3 = composeReducers(reducer, reducer2);

// check redux middlewares and enhancers

const enhancer1 = (spec) => (api) => {
  const mergedReducer = mergeReducers(api.reducer, spec.reducer);

  return {
    ...api,
    reducer: mergedReducer
  }
}

// should have hooks?
const enhancer2 = (spec) => (api) => {
  const schema = spec.schema;

  return {

  }
}

const enhancer3 = (spec) => (api) => {
  const headers = spec.headers;

  return {
    ...api,
    call: () => axios()
  }
}

// rootApi = {
//   readAll: {
//     selectors: {
//       isFetching: ...
//     },
//     reducer,
//     call,
//     constants,
//     actions,
//   }
// }

// enhancers:
// - normalizr
// - url as (state) => string function? // or 'params' prop = { merchantId: (state) => any}

const readAllTickets = api => api.entities.tickets.readAll;

dispatch(
  request(readAllTickets(rootApi), {
    params: {},
    body: {}
  })
);

select(readAllTickets(rootApi), "isFetching");

type(readAllTickets(rootApi), "request");
