import * as React from "react";
import styled from "styled-components";
import { nest } from "recompose";
import { NavLink } from "react-router-dom";
import { replaceParams } from "core/utils";
import { border } from "core/colors";
import { paths } from "core/router";
import Line from "components/shared/kit/Line";
import Title from "components/shared/kit/Title";
import Icon from "components/shared/kit/Icon";
import Item from "components/shared/common/tickets/Item";

const Wrap = styled.div`
  padding-left: 14px;
  margin-left: 14px;
  margin-top: -10px;
  margin-bottom: -10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-left: 1px solid ${border};
  width: 400px;
`;

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

export default ({ ticket, onCloseClick }) =>
  <Wrap>
    <Head>
      <Open to={"/"}>Open full</Open>
      <Close onClick={onCloseClick} />
    </Head>
    <Item title={ticket.title} description={ticket.description} />
  </Wrap>;
