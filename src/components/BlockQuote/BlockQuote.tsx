import React from "react";
import styles from "./BlockQuote.module.scss";

type Props = React.HTMLAttributes<HTMLQuoteElement>;

const BlockQuote: React.FC<Props> = ({ children, ...props }) => (
  <blockquote {...props} className={styles.BlockQuote}>
    {children}
  </blockquote>
);

export default BlockQuote;
