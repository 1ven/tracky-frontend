import { compose, mapProps, lifecycle, withProps } from "recompose";
import { RouteComponentProps } from "react-router";
import { prop } from "ramda";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { request, select, isLoading } from "core/api";
import { load } from "core/decorators";
import { selector as reposSelector } from "api/repos";
import View, { Props } from "./View";
import { getReposNames } from "./selectors";

export default compose<Props, {}>(
  withProps(({ match }: RouteComponentProps<Params>) => ({
    name: match.params.name,
    repos: []
  })),
  connect(
    createStructuredSelector({
      isLoading: isLoading(reposSelector),
      repos: getReposNames
    }),
    {
      requestUser: (name: string) =>
        request(reposSelector, { params: { name } })
    }
  ),
  load(({ name, requestUser }) => requestUser(name))
)(View);

export type Params = {
  name: string;
};
