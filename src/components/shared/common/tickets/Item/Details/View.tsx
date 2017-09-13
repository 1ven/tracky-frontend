import * as React from "react";
import styled from "styled-components";
import Subtitle from "components/shared/kit/Subtitle";
import Section from "../Section";
import Status from "./Status";

export default ({ ticket }) =>
  <Section title="Details">
    <Status id={ticket.id} status={ticket.status.id} />
  </Section>;
