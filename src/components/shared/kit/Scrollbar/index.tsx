import { Scrollbars } from "react-custom-scrollbars";
import { withProps } from "recompose";

export default withProps({
  autoHide: true,
  autoHideTimeout: 1000
})(Scrollbars) as any;
