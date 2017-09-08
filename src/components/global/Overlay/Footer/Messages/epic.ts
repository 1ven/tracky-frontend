import { concat, path, endsWith, compose, prop, allPass } from "ramda";
import { create } from "./actions";

const getTitle = path(["payload", "request", "meta", "title"]);

export default action$ =>
  action$
    .filter(
      allPass([
        // TODO: rely on @@api/ namespace in the future
        compose(endsWith("/failure"), prop("type")),
        compose(Boolean, getTitle)
      ])
    )
    .map(
      compose(
        text => create({ text }),
        concat("Error was occured while trying to "),
        getTitle
      )
    );
