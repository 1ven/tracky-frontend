import * as React from "react";
import { nest } from "recompose";
import styled from "styled-components";
import { Ticket, Project } from "tracky-types";
import Loader from "components/shared/kit/Loader";
import Item from "components/shared/common/tickets/Item";
import PageWrap from "components/shared/common/tickets/PageWrap";
import Header from "./Header";

export default ({ isLoading, projectId, ticketId }: Props) =>
  <PageWrap>
    {isLoading
      ? <Loader />
      : <div>
          <Header projectId={projectId} />
          <Item id={ticketId} />
        </div>}
  </PageWrap>;

export type Props = {
  ticketId: Ticket["id"];
  projectId: Project["id"];
  isLoading: boolean;
};
