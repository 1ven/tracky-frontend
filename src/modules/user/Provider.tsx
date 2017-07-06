import { compose, mapProps, lifecycle } from "recompose";
import { connect } from "swifty-react";
import { getData, getIsFetching } from "swifty-api";
import { prop } from "ramda";
import { withRouter, RouterProps } from "core/router";
import { load } from "core/decorators";
import View, { Props } from "./View";
import api from "api";
import { getRepos } from "./selectors";

export default compose<Props, {}>(
  withRouter,
  mapProps(({ match }: RouterProps<Params>) => ({
    name: match.params.name
  })),
  load(({ name }) =>
    api.repos.request$.next({
      params: {
        name
      }
    })
  ),
  // TODO: use Repos type from 'api/repos' dir.
  connect([api.repos.reducer$], ([reposApi]: any) => {
    return {
      repos: getRepos(reposApi),
      isLoading: getIsFetching(reposApi)
    };
  })
)(View);

export type Params = {
  name: string;
};
