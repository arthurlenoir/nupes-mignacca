import React from "react";
import { useTheme } from "styled-components";
import { ArrowIcon } from "../Icons";
import Text from "../Text";
import styles from "./ListItem.module.scss";

interface Props {
  children?: React.ReactNode;
}

const ListItem: React.FC<Props> = ({ children }) => {
  const theme = useTheme();
  return (
    <li className={styles.ListItemContainer}>
      <ArrowIcon
        color={theme.colors.primary.background}
        className={styles.StyledArrow}
      />
      <Text className={styles.StyledText}>{children}</Text>
    </li>
  );
};

export default ListItem;
