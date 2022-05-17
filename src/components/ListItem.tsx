import React from "react";
import styled, { useTheme } from "styled-components";
import { ArrowIcon } from "./Icons";
import Text from "./Text";

interface Props {
  children?: React.ReactNode;
}

const ListItemContainer = styled.li`
  list-style-type: none;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 0 16px;
`;

const StyledArrow = styled(ArrowIcon)`
  margin: 2px 4px 0 0;
`;

const StyledText = styled(Text)`
  margin: 0;
  line-height: 1.2em;
`;

const ListItem: React.FC<Props> = ({ children }) => {
  const theme = useTheme();
  return (
    <ListItemContainer>
      <StyledArrow color={theme.colors.primary.background} />
      <StyledText>{children}</StyledText>
    </ListItemContainer>
  );
};

export default ListItem;
