import * as React from "react";
import { connect } from "core/redux";
import { getModals } from "./reducer";
import * as names from "./names";

import CreateTicket from "components/global/Overlay/Footer/Modal";
import CreateProject from "components/global/Overlay/Sidebar/Projects/Modal";
import RemoveTicket from "components/pages/project/More/RemoveModal";

const map = {
  [names.CREATE_TICKET]: CreateTicket,
  [names.CREATE_PROJECT]: CreateProject,
  [names.REMOVE_TICKET]: RemoveTicket
};

export default connect({
  items: getModals
})(({ items }: any) =>
  <div>
    {items.map((modal, i) =>
      React.createElement(map[modal.name] as any, {
        key: i,
        data: modal.data
      })
    )}
  </div>
);
