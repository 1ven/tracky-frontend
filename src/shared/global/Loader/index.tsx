/**
 * Used for preventing app rendering, while some global data is fetching, for
 * example user data.or projects
 */

import * as actions from "./actions";

export { default } from "./View";
export { default as reducer, getLoading } from "./reducer";
export { actions };
