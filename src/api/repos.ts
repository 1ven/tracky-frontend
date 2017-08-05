export default {
  url: "/users/:name/repos",
  method: "GET"
};

export type Repo = {
  id: number;
  full_name: string;
  name: string;
};

export type Response = Repo[];
