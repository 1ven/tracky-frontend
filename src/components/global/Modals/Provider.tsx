import * as React from "react";
import { connect } from "core/redux";
import { getModals } from "./reducer";

import CreateTicket, {
  modals as ticketModals
} from "components/global/Overlay/Footer/Modal";
import CreateProject, {
  modals as projectModals
} from "components/global/Overlay/Sidebar/Projects/Modal";

export default connect({
  items: getModals
})(({ items }: any) =>
  <div>
    {items.map(
      (name, i) =>
        ({
          [ticketModals.createTicketModal]: <CreateTicket key={i} />,
          [projectModals.createProjectModal]: <CreateProject key={i} />
        }[name])
    )}
  </div>
);
