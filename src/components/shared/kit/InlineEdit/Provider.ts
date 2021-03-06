import { prop, concat } from "ramda";
import { compose, withProps, withState, withHandlers } from "recompose";
import { connect } from "core/redux";
import { show, hide } from "./actions";
import { isEditing } from "./reducer";
import View from "./View";

export default compose(
  connect(
    {
      isEditing
    },
    (dispatch, { name }) => ({
      show() {
        dispatch(show(name));
      },
      hide() {
        dispatch(hide(name));
      }
    })
  )
)(View) as any;
