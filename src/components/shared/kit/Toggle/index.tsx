import * as React from "react";
import * as enhanceWithClickOutside from "react-click-outside";
import { compose, lifecycle, withState } from "recompose";
import { is } from "ramda";

export default compose(
  withState("isActive", "setActivity", ({ isActive }) => isActive || false),
  enhanceWithClickOutside,
  lifecycle<InternalProps, {}>({
    componentDidMount() {
      (this as any).handleClickOutside = () => {
        this.props.setActivity(false);
      };
    }
  })
)(({ link, body, isActive, setActivity }: Props & InternalProps) =>
  <div>
    <div
      onClick={() => {
        setActivity(!isActive);
      }}
    >
      {isFunc(link) ? link(isActive) : link}
    </div>
    <div onClick={() => setActivity(false)}>
      {isActive && body}
    </div>
  </div>
) as React.ComponentClass<Props>;

type InternalProps = {
  setActivity: (isActive: Props["isActive"]) => void;
};

export type Props = {
  link: React.ReactNode | ((isActive: Props["isActive"]) => React.ReactNode);
  body: React.ReactNode;
  isActive?: boolean;
};

const isFunc = (val): val is Function => is(Function, val);
