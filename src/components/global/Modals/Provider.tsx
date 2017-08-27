import * as React from "react";
import { connect } from "core/redux";
import { getModals } from "./reducer";
import * as names from "./names";

import CreateTicket from "components/global/Overlay/Footer/Modal";
import CreateProject from "components/global/Overlay/Sidebar/Projects/Modal";

export default connect({
  items: getModals
})(({ items }: any) =>
  <div>
    {items.map(
      (name, i) =>
        ({
          [names.CREATE_TICKET]: <CreateTicket key={i} />,
          [names.CREATE_PROJECT]: <CreateProject key={i} />
        }[name])
    )}
  </div>
);
