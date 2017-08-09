import { compose, mapProps, lifecycle, withProps } from "recompose";
import { RouteComponentProps } from "react-router";
import { prop } from "ramda";
import { connect } from "react-redux";
import { request } from "core/api";
// import { Maybe } from "ramda-fantasy";
import { load } from "core/decorators";
import { selector as reposSelector } from "api/repos";
import View, { Props } from "./View";
// import { getRepos } from "./selectors";

export default compose<Props, {}>(
  connect(void 0, {
    requestUser: (name: string) => request(reposSelector, { params: { name } })
  }),
  load(({ match, requestUser }) => requestUser(match.params.name)),
  withProps(({ match }: RouteComponentProps<Params>) => ({
    name: match.params.name,
    repos: ["repo a", "repo b", "repo c"],
    isLoading: false
  }))
)(View);

export type Params = {
  name: string;
};
