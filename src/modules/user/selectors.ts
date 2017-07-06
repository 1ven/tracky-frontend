import { chain, map, prop, compose } from "ramda";
import { getDataSafe } from "core/selectors";

type Repo = {
  name: string;
  something: number;
};

type State = {
  data: Repo[];
  lastUpdated: number;
};

const getNames = map<Repo, string>(prop("name"));
// export const getRepos = compose<State, Maybe<Repo>, string[]>(chain(getNames), getDataSafe);
// TODO: Prob, chain method is incorrect, it should return Maybe instead of plain value
export const getRepos = state => getDataSafe(state).chain(getNames);
