import * as React from "react";
import styled from "styled-components";
import { Ticket, Project } from "tracky-types";
import Input from "components/shared/kit/Input";
import Loader from "components/shared/kit/Loader";
import Headline from "components/shared/kit/Headline";
import PageWrap from "components/shared/common/tickets/PageWrap";
import * as List from "components/shared/common/tickets/List";
import Preview from "./Preview";

export default ({
  items = [],
  isLoading,
  projectId,
  showTicket,
  closeTicket,
  activeTicket
}: Props) =>
  <PageWrap
    rightBar={
      activeTicket && <Preview ticket={activeTicket} close={closeTicket} />
    }
  >
    {isLoading
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
                    <List.Title onClick={() => showTicket(t)}>
                      {t.title}
                    </List.Title>
                  }
                  right={<List.More id={t.id} />}
                />
              )}
            </div>
          </div>}
  </PageWrap>;

export type Props = {
  projectId: Project["id"];
  items: Ticket[];
  isLoading: boolean;
  closeTicket: () => void;
  showTicket: (t: Ticket) => void;
  activeTicket?: Ticket;
};
