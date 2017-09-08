import * as React from "react";
import { Provider } from "react-redux";
import { withHistory } from "../router";
import { ConnectedRouter } from "react-router-redux";
import createStore from "./store";

export default withHistory(({ children, history }: Props) =>
  // createStore is calling on every render?
  <Provider store={createStore(history)}>
    {/* do not use react router redux? */}
    <ConnectedRouter history={history}>
      {children}
    </ConnectedRouter>
  </Provider>
);

type Props = {
  children: React.ReactElement<any>;
  history: any;
};
