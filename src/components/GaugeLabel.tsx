import { Highlight } from "nupes-ui";
import React from "react";
import styled from "styled-components";
import { renderMoney } from "./DonationForm/renderMoney";
import Text from "./Text";

interface Props {
  value: number;
  target: number;
}

const StyledText = styled(Text)`
  line-height: 1em;
  margin: 0;
`;

const GaugeLabel: React.FC<Props> = ({ value, target }) => (
  <StyledText>
    <Highlight small>{renderMoney(value)}</Highlight>
    <span> sur {renderMoney(target)}</span>
  </StyledText>
);

export default GaugeLabel;
