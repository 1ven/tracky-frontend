import * as React from "react";
import styled from "styled-components";
import { nest } from "recompose";
import { NavLink } from "react-router-dom";
import { Ticket } from "tracky-types";
import { replaceParams } from "core/utils";
import { border } from "core/colors";
import { paths } from "core/router";
import Line from "components/shared/kit/Line";
import Title from "components/shared/kit/Title";
import Icon from "components/shared/kit/Icon";
import Item from "components/shared/common/tickets/Item";

const Wrap = styled.div`width: 350px;`;

const Head = styled(Line)`
  display: flex;
  align-items: center;
`;

const Close = styled(Icon).attrs({
  name: "close"
})`
  margin-left: auto;
  font-size: 12px;
  cursor: pointer;
`;

const Open = styled(nest(NavLink, Title))`
  cursor: pointer;
  color: #000;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
` as any;

export default ({ ticket, close, link }: Props) =>
  <Wrap>
    <Head>
      <Open to={link}>Open full</Open>
      <Close onClick={close} />
    </Head>
    <Item title={ticket.title} description={ticket.description} />
  </Wrap>;

export type Props = {
  link: string;
  ticket: Ticket;
  close: () => void;
};
