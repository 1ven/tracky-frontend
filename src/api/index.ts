import { createApi } from "swifty-api";

const spec = {
  repos: {
    url: "/users/:name/repos",
    method: "GET"
  }
};

const config = {
  root: "https://api.github.com"
};

const api = createApi(spec, config);

export default api;
