import * as React from "react";
import { connect } from "core/redux";
import { getModals } from "./reducer";
import * as names from "./names";

import * as Footer from "components/global/Overlay/Footer";
import * as OverMenu from "components/global/Overlay/Header/OverMenu";
import * as TicketsEntry from "components/shared/common/Tickets";

const getModal = (name: string) =>
  ({
    [names.CREATE_TICKET]: Footer.Modal,
    [names.CREATE_PROJECT]: OverMenu.Modal,
    [names.REMOVE_TICKET]: TicketsEntry.RemoveModal
  }[name] as any);

export default connect({
  items: getModals
})(({ items }: any) =>
  <div>
    {items.map((modal, i) =>
      React.createElement(getModal(modal.name), {
        key: i,
        data: modal.data
      })
    )}
  </div>
);
