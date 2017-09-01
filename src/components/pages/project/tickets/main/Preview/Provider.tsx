import { compose, lifecycle, withProps } from "recompose";
import { withRouter } from "react-router-dom";
import { paths } from "core/router";
import { replaceParams } from "core/utils";
import View, { Props as ViewProps } from "./View";

import * as enhanceWithClickOutside from "react-click-outside";

export default compose<ViewProps, Props>(
  enhanceWithClickOutside,
  lifecycle<ViewProps, {}>({
    componentDidMount() {
      (this as any).handleClickOutside = () => {
        this.props.close();
      };
    }
  }),
  withRouter,
  withProps(({ match, ticket }) => ({
    link: replaceParams(paths.PROJECT_TICKETS_TICKET, {
      ...match.params,
      ticketId: ticket.id
    })
  }))
)(View);

export type Props = Pick<ViewProps, "ticket" | "close">;
