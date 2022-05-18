import {
  LogoEELV,
  LogoLFI,
  LogoPCF,
  LogoND,
  LogoPS,
  LogoGenerations,
  Title,
} from "nupes-ui";
import React from "react";
import styled from "styled-components";

interface Props {}

const LogosSoupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 48px 0;
  gap: 24px 54px;
  width: 100%;
`;

const LogoContainer = styled.div`
  flex: 1 0 150px;
  text-align: center;
`;

const LogoSoup: React.FC<Props> = () => (
  <LogosSoupContainer>
    <LogoContainer>
      <LogoEELV height={80} />
    </LogoContainer>
    <LogoContainer>
      <LogoLFI height={70} />
    </LogoContainer>
    <LogoContainer>
      <LogoPS height={70} />
    </LogoContainer>
    <LogoContainer>
      <LogoPCF height={70} />
    </LogoContainer>
    <LogoContainer>
      <LogoGenerations width={150} />
    </LogoContainer>
    <LogoContainer>
      <LogoND height={60} />
    </LogoContainer>
  </LogosSoupContainer>
);

export default LogoSoup;
