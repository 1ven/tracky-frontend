import { combineEpics } from "redux-observable";
import { allPass, curry, path, compose, equals, prop } from "ramda";
import { type } from "core/api";
import { getEntry } from "api/tickets/update";
import { actions, names } from "components/shared/kit/InlineEdit";

const createEpic = (key: string, name: string) => action$ =>
  action$.filter(isSuccess(key)).map(() => actions.hide(name));

const hasKey = curry((key, obj) =>
  Boolean(path(["payload", "request", "body", key], obj))
);

const isSuccess = key =>
  allPass([
    compose(equals(type(getEntry, "success")), prop("type")),
    hasKey(key)
  ]);

export default combineEpics(
  createEpic("title", names.TICKET_TITLE),
  createEpic("description", names.TICKET_DESCRIPTION)
);
