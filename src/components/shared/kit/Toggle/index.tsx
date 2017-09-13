import * as React from "react";
import styled from "styled-components";
import * as enhanceWithClickOutside from "react-click-outside";
import { compose, lifecycle, withState } from "recompose";
import { is } from "ramda";

const Link = styled.div`display: flex;`;

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
    <Link
      onClick={() => {
        setActivity(!isActive);
      }}
    >
      {isFunc(link) ? link(isActive) : link}
    </Link>
    <div>
      {isActive && (isFunc(body) ? body(() => setActivity(false)) : body)}
    </div>
  </div>
) as React.ComponentClass<Props>;

type InternalProps = {
  setActivity: (isActive: Props["isActive"]) => void;
};

export type Props = {
  link: React.ReactNode | ((isActive: Props["isActive"]) => React.ReactNode);
  body: React.ReactNode | ((close: Function) => React.ReactNode);
  isActive?: boolean;
};

const isFunc = (val): val is Function => is(Function, val);
