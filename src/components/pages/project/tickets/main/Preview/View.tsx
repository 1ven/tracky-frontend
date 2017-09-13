import * as React from "react";
import styled from "styled-components";
import { nest } from "recompose";
import { NavLink } from "react-router-dom";
import { Ticket } from "tracky-types";
import { replaceParams } from "core/utils";
import { border } from "core/colors";
import { paths } from "core/router";
import Headline from "components/shared/kit/Headline";
import Icon from "components/shared/kit/Icon";
import Item from "components/shared/common/tickets/Item";

const Wrap = styled.div`width: 350px;`;

const Close = styled(Icon).attrs({
  name: "close"
})`
  margin-left: auto;
  font-size: 12px;
  cursor: pointer;
`;

export default ({ id, close, link }: Props) =>
  <Wrap>
    <Headline right={<Close onClick={close} />}>
      <NavLink to={link}>Open full</NavLink>
    </Headline>
    <Item id={id} />
  </Wrap>;

export type Props = {
  link: string;
  id: Ticket["id"];
  close: () => void;
};
