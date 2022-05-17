import React from "react";
import styled, { css } from "styled-components";
import useBaseUrl from "@docusaurus/useBaseUrl";

interface HeaderContainerProps {
  backgroundImage: string;
}

const HeaderContainer = styled.picture<HeaderContainerProps>`
  display: flex;
  height: 40vh;
  text-align: center;
  justify-content: center;
  align-items: flex-end;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin: 0 -1rem 24px;
  ${({ backgroundImage }) =>
    css`
      background-image: url("${backgroundImage}");
    `}
  @media only screen and (max-width: 996px) {
    height: 25vh;
  }
`;

const HeaderImage = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

const Header: React.FC = () => {
  const backgroundImage = useBaseUrl("/img/cover-background.jpg");
  const mignaccaWebP = useBaseUrl("/img/julia-mignacca.webp");
  const mignaccaPng = useBaseUrl("/img/julia-mignacca.png");
  return (
    <HeaderContainer backgroundImage={backgroundImage}>
      <source srcSet={mignaccaWebP} type="image/webp" />
      <source srcSet={mignaccaPng} type="image/png" />
      <HeaderImage src={mignaccaPng} alt="Julia Mignacca" />
    </HeaderContainer>
  );
};

export default Header;
