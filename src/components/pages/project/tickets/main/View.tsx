import * as React from "react";
import styled from "styled-components";
import { Project } from "tracky-types";
import { replaceParams } from "core/utils";
import { paths } from "core/router";
import Input from "components/shared/kit/Input";
import Loader from "components/shared/kit/Loader";
import Headline from "components/shared/kit/Headline";
import { Row, NoItems, More, Title } from "components/shared/common/Tickets";

const ticketLink = replaceParams(paths.PROJECT_TICKETS_TICKET);

export default ({ name, items = [], isLoading, projectId }: Props) =>
  isLoading
    ? <Loader />
    : !items.length
      ? <NoItems />
      : <div>
          <Headline>Tickets</Headline>
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
  name: Project["name"];
  projectId: Project["id"];
  items: any[];
  isLoading: boolean;
};
