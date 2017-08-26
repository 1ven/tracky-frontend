import * as reactRedux from "react-redux";
import { equals } from "ramda";
import { lifecycle, compose } from "recompose";

export default propsToAction =>
  compose(
    reactRedux.connect(state => ({ state })),
    lifecycle({
      componentDidMount() {
        const { dispatch } = this.props as any;

        dispatch(propsToAction(this.props));
      },
      componentDidUpdate(prevProps) {
        const { dispatch } = this.props as any;
        const prevAction = propsToAction(prevProps);
        const action = propsToAction(this.props);

        if (!equals(prevAction, action)) {
          dispatch(action);
        }
      }
    })
  );
