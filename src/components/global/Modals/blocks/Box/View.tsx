import * as React from "react";
import styled from "styled-components";
import Icon from "components/shared/kit/Icon";

export default ({ closeModal, title, children }: any) =>
  <Wrap onClick={e => e.stopPropagation()}>
    <Head>
      <Title>
        {title}
      </Title>
      <Close onClick={closeModal} />
    </Head>
    {children}
  </Wrap>;

const Close = styled(Icon).attrs({ name: "close" })`
  margin-left: auto;
  cursor: pointer;
  font-size: 16px;
` as any;

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
