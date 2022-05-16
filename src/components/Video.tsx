import React from "react";
import styled, { css } from "styled-components";

interface Props {
  src: string;
  thumbnail?: string;
  title?: string;
}

const DEFAULT_RATIO = 0.5625;

interface ContainerProps {
  ratio?: number;
}

const Container = styled.div<ContainerProps>`
  position: relative;
  ${({ ratio }) => css`
    padding-top: ${(ratio || DEFAULT_RATIO) * 100}%;
  `}
`;

const IframeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const Video: React.FC<Props> = ({ src, title, thumbnail }) => {
  return (
    <Container>
      <IframeContainer>
        <iframe
          title={title}
          src={src}
          allowFullScreen
          sandbox="allow-same-origin allow-scripts allow-popups"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </IframeContainer>
    </Container>
  );
};

export default Video;
