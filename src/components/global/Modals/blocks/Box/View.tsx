import * as React from "react";
import styled from "styled-components";
import Icon from "components/shared/kit/Icon";

export default ({ onClose, title, children, name }: any) =>
  <Wrap>
    <Head>
      <Title>
        {title}
      </Title>
      <Close onClick={() => onClose(name)} />
    </Head>
    {children}
  </Wrap>;

const Close = styled(Icon).attrs({ name: "close" })`
  margin-left: auto;
  cursor: pointer;
  font-size: 16px;
`;

const Wrap = styled.div`
  background-color: #fff;
  border-radius: 3px;
  padding: 14px;
  max-width: 560px;
  width: 100%;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
