import React from "react";
import { LogoNupesWithText } from "nupes-ui";
import styled from "styled-components";

const StyledLogoContainer = styled.div`
  max-width: 500px;
  width: 100%;
  margin: auto;
  display: block;
`;

const NupesLogo: React.FC = () => {
  return (
    <StyledLogoContainer>
      <LogoNupesWithText width="100%" />
    </StyledLogoContainer>
  );
};

export default NupesLogo;
