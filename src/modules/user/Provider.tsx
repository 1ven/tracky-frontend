import { compose, mapProps, lifecycle } from "recompose";
import { connect } from "swifty-react";
import { getData, getIsFetching } from "swifty-api";
import { prop } from "ramda";
import { Maybe } from "ramda-fantasy";
import { withRouter, RouterProps } from "core/router";
import { load } from "core/decorators";
import repos, { State as ReposState } from "api/repos";
import View, { Props } from "./View";
import { getRepos } from "./selectors";

export default compose<Props, {}>(
  withRouter,
  mapProps(({ match }: RouterProps<Params>) => ({
    name: match.params.name
  })),
  load(({ name }: Params) =>
    repos.request$.next({
      params: {
        name
      }
    })
  ),
  connect([repos.reducer$], ([reposState]: [ReposState]) => {
    return {
      repos: getRepos(reposState).getOrElse([]),
      isLoading: getIsFetching(reposState)
    };
  })
)(View);

export type Params = {
  name: string;
};
