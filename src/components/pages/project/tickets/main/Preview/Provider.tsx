import { compose, lifecycle } from "recompose";
import View, { Props } from "./View";

import * as enhanceWithClickOutside from "react-click-outside";

export default compose<Props, Props>(
  enhanceWithClickOutside,
  lifecycle<Props, {}>({
    componentDidMount() {
      (this as any).handleClickOutside = () => {
        this.props.close(void 0);
      };
    }
  })
)(View);
