import { LogoEELV, LogoLFI } from "nupes-ui";
import React from "react";
import styled from "styled-components";

interface Props {}

const LogoContainer = styled.div`
  display: flex;
  flex-wrap; wrap;
  justify-content: space-around;
  align-items: center;
  margin: 48px 0;
`;

const LogoSoup: React.FC<Props> = () => (
  <LogoContainer>
    <LogoEELV height={80} />
    <LogoLFI height={70} />
  </LogoContainer>
);

export default LogoSoup;
