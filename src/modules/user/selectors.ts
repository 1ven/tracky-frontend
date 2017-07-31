import { map, prop, compose } from "ramda";
import { getDataSafe } from "core/selectors";
import { State as ReposState, Response } from "api/repos";
import { filter } from "ramda";

const getNames = map(prop("name"));
export const getRepos = compose(map(getNames), getDataSafe);
