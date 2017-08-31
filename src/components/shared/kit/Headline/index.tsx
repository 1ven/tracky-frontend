import * as React from "react";
import styled from "styled-components";
import { nest } from "recompose";
import Title from "components/shared/kit/Title";
import Line from "components/shared/kit/Line";

export default nest(Line, Title);
