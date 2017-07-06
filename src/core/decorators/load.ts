import { lifecycle } from "recompose";

export default (fn: (props) => void) =>
  lifecycle({
    componentDidMount() {
      fn(this.props);
    }
  });
