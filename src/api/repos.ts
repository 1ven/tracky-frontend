export default {
  url: "/users/:name/repos",
  method: "GET"
};

export const selector = api => api.repos;

export type Repo = {
  id: number;
  full_name: string;
  name: string;
};

export type Response = Repo[];
