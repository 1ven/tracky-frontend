import * as React from "react";
import { connect } from "core/redux";
import { getModals } from "./reducer";

import CreateTicket, { modals } from "components/global/Overlay/Footer/Modal";

export default connect({
  items: getModals
})(({ items }: any) =>
  <div>
    {items.map(
      (name, i) =>
        ({
          [modals.createTicketModal]: <CreateTicket key={i} />
        }[name])
    )}
  </div>
);
