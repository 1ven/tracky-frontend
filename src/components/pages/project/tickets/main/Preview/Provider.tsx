import { compose, lifecycle, withProps } from "recompose";
import { Ticket } from "tracky-types";
import { withClickOutside } from "core/decorators";
import { withRouter } from "react-router-dom";
import { paths } from "core/router";
import { replaceParams } from "core/utils";
import View, { Props as ViewProps } from "./View";

import * as enhanceWithClickOutside from "react-click-outside";

export default compose<ViewProps, Props>(
  withClickOutside(p => p.close()),
  withRouter,
  withProps(({ match, id }) => ({
    link: replaceParams(paths.PROJECT_TICKETS_TICKET, {
      ...match.params,
      ticketId: id
    })
  }))
)(View);

export type Props = {
  id: Ticket["id"];
  close: ViewProps["close"];
};
