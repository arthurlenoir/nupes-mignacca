import React from "react";
import { Text as NupesText } from "nupes-ui";
import styled from "styled-components";

const StyledText = styled(NupesText)`
  font-size: 18px;
`;

interface Props {
  children?: React.ReactNode;
}
const Text: React.FC<Props> = ({ children, ...props }) => (
  <StyledText {...props}>{children}</StyledText>
);

export default Text;
