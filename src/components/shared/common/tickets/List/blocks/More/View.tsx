import * as React from "react";
import styled from "styled-components";
import Toggle from "components/shared/kit/Toggle";
import ListBox from "components/shared/kit/ListBox";
import Icon from "components/shared/kit/Icon";

const Dropdown = styled(ListBox)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  text-align: left;
  margin-top: 18px;
` as any;

const MoreWrap = styled.div`position: relative;`;

const MoreLink = styled(Icon).attrs({ name: "more_horiz" })`
  font-size: 18px;
  cursor: pointer;
`;

export default ({ onRemoveClick }) =>
  <MoreWrap>
    <Toggle
      link={<MoreLink />}
      body={<Dropdown items={[<span onClick={onRemoveClick}>Remove</span>]} />}
    />
  </MoreWrap>;
