import createHistory from "history/createBrowserHistory";
import { withProps } from "recompose";

export default withProps({ history: createHistory() });
