import * as React from "react";
import styled from "styled-components";
import { Ticket, Project } from "tracky-types";
import Input from "components/shared/kit/Input";
import Loader from "components/shared/kit/Loader";
import Headline from "components/shared/kit/Headline";
import PageWrap from "components/shared/common/tickets/PageWrap";
import Parameters from "components/shared/common/tickets/Parameters";
import * as List from "components/shared/common/tickets/List";
import Preview from "./Preview";

export default ({
  items = [],
  isLoading,
  projectId,
  showTicket,
  closeTicket,
  activeId,
  onParametersChange,
  initialParameters
}: Props) =>
  <PageWrap
    rightBar={activeId && <Preview id={activeId} close={closeTicket} />}
  >
    <Headline
      right={
        <Parameters
          initialValues={initialParameters}
          onChange={onParametersChange}
        />
      }
    >
      Tickets
    </Headline>
    {isLoading
      ? <Loader />
      : !items.length
        ? <List.NoItems />
        : <div>
            {items.map((t, i) =>
              <List.Row
                key={i}
                isActive={activeId && t.id === activeId}
                left={
                  <List.Title onClick={() => showTicket(t.id)}>
                    {t.title}
                  </List.Title>
                }
                right={<List.More id={t.id} />}
              />
            )}
          </div>}
  </PageWrap>;

export type Props = {
  onParametersChange: any;
  initialParameters: any;
  projectId: Project["id"];
  items: Ticket[];
  isLoading: boolean;
  closeTicket: () => void;
  showTicket: (id: Ticket["id"]) => void;
  activeId?: Ticket["id"];
};
