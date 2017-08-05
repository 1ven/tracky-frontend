import { map, prop, compose, filter } from "ramda";
// import { getDataSafe } from "core/selectors";

const getNames = map(prop("name"));
// TODO: keep generic selectors in api/repos
// keep UI specific selectors in corresponding module, ex "user"

// export const getRepos = compose(map(getNames), getDataSafe);
