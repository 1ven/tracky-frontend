import * as React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { header } from "core/colors";
import { Container } from "components/shared/kit/Grid";
import { paths } from "components/pages/meta";

export default () =>
  <Wrap>
    <Container>
      <InnerWrap>
        <Item>
          <Link to={paths.main} exact>
            My tickets
          </Link>
        </Item>
      </InnerWrap>
    </Container>
  </Wrap>;

const Link = styled(NavLink)`
  font-size: 14px;
  color: #e4e4e4;
  text-decoration: none;
  &:hover, &.active {
    color: #fff;
  }
`;

const Item = styled.div`
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
`;

const InnerWrap = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const Wrap = styled.div`
  height: 45px;
  width: 100%;
  display: flex;
  background-color: ${header};
`;
