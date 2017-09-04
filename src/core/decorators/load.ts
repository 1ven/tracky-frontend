import * as reactRedux from "react-redux";
import { equals, T } from "ramda";
import { lifecycle, compose } from "recompose";

export default (propsToAction, shouldDispatch = T) =>
  compose(
    reactRedux.connect(state => ({ state })),
    lifecycle({
      componentDidMount() {
        const { dispatch } = this.props as any;

        if (shouldDispatch(this.props)) {
          dispatch(propsToAction(this.props));
        }
      },
      componentDidUpdate(prevProps) {
        const { dispatch } = this.props as any;
        const prevAction = propsToAction(prevProps);
        const action = propsToAction(this.props);

        if (shouldDispatch(this.props) && !equals(prevAction, action)) {
          dispatch(action);
        }
      }
    })
  );
