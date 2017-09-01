import * as React from "react";
import styled from "styled-components";
import { Ticket, Project } from "tracky-types";
import Input from "components/shared/kit/Input";
import Loader from "components/shared/kit/Loader";
import Headline from "components/shared/kit/Headline";
import * as List from "components/shared/common/tickets/List";

export default ({ items = [], isLoading, projectId, onTicketClick }: Props) =>
  isLoading
    ? <Loader />
    : !items.length
      ? <List.NoItems />
      : <div>
          <Headline>Tickets</Headline>
          <div>
            {items.map((t, i) =>
              <List.Row
                key={i}
                left={
                  <List.Title onClick={() => onTicketClick(t.id)}>
                    {t.title}
                  </List.Title>
                }
                right={<List.More id={t.id} />}
              />
            )}
          </div>
        </div>;

export type Props = {
  projectId: Project["id"];
  items: Ticket[];
  isLoading: boolean;
  onTicketClick: (id: Ticket["id"]) => void;
};
