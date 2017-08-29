import * as React from "react";
import styled from "styled-components";
import Input from "components/shared/kit/Input";
import Loader from "components/shared/kit/Loader";
import BaseTitle from "components/shared/kit/Title";
import { Row, NoItems, More, Title } from "components/shared/common/Tickets";

export default ({ items = [], isLoading }: Props) =>
  isLoading
    ? <Loader />
    : !items.length
      ? <NoItems />
      : <div>
          <BaseTitle>Tickets</BaseTitle>
          <div>
            {items.map((t, i) =>
              <Row
                key={i}
                left={
                  <Title id={t.id}>
                    {t.title}
                  </Title>
                }
                right={<More id={t.id} />}
              />
            )}
          </div>
        </div>;

export type Props = {
  items: any[];
  isLoading: boolean;
};
