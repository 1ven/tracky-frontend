import { lifecycle, compose } from "recompose";
import * as enhanceWithClickOutside from "react-click-outside";

export default cb =>
  compose(
    enhanceWithClickOutside,
    lifecycle<{}, {}>({
      componentDidMount() {
        (this as any).handleClickOutside = () => {
          cb(this.props);
        };
      }
    })
  );
