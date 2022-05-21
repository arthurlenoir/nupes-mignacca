import React from "react";
import { Text as NupesText } from "nupes-ui";
import styles from "./Text.module.css";

interface Props {
  children?: React.ReactNode;
  className?: string;
}
const Text: React.FC<Props> = ({ children, className, ...props }) => (
  <NupesText
    className={`${styles.text} ${className ? className : ""}`}
    {...props}
  >
    {children}
  </NupesText>
);

export default Text;
