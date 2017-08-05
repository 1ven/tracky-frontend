import { compose, mapProps, lifecycle, withProps } from "recompose";
import { RouteComponentProps } from "react-router";
import { prop } from "ramda";
// import { Maybe } from "ramda-fantasy";
import { load } from "core/decorators";
// import repos from "api/repos";
import View, { Props } from "./View";
// import { getRepos } from "./selectors";

export default compose<Props, {}>(
  mapProps(({ match }: RouteComponentProps<Params>) => ({
    name: match.params.name
  })),
  // load(({ name }: Params) =>
  // repos.request$.next({
  //   params: {
  //     name
  //   }
  // })
  // ),
  // connect([repos.reducer$], ([reposState]: [ReposState]) => {
  //   return {
  //     repos: getRepos(reposState).getOrElse([]),
  //     isLoading: getIsFetching(reposState)
  //   };
  // })
  withProps({
    repos: ["repo a", "repo b", "repo c"],
    isLoading: false
  })
)(View);

export type Params = {
  name: string;
};
