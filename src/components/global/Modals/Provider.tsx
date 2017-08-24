import * as React from "react";
import { connect } from "core/redux";
import { getModals } from "./reducer";

import CreateTicket, {
  createTicketModal
} from "components/global/Overlay/Footer/Modal";

export default connect({
  modals: getModals
})(({ modals }: any) =>
  <div>
    {modals.map(
      (name, i) =>
        ({
          [createTicketModal]: <CreateTicket key={i} />
        }[name])
    )}
  </div>
);
