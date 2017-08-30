import * as React from "react";
import styled from "styled-components";
import { replaceParams } from "core/utils";
import { paths } from "core/router";
import Input from "components/shared/kit/Input";
import Loader from "components/shared/kit/Loader";
import BaseTitle from "components/shared/kit/Title";
import { Row, NoItems, More, Title } from "components/shared/common/Tickets";

const ticketLink = replaceParams(paths.PROJECT_TICKETS_TICKET);

export default ({ items = [], isLoading, projectId }: Props) =>
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
                  <Title
                    to={ticketLink({
                      ticketId: t.id,
                      projectId
                    })}
                  >
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
  projectId: number;
  isLoading: boolean;
};
