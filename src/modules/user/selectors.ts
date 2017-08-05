import { map, prop, compose, filter } from "ramda";
// import { getDataSafe } from "core/selectors";

const getNames = map(prop("name"));
// export const getRepos = compose(map(getNames), getDataSafe);
