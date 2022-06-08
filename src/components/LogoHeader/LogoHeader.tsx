import { NupesLogo, Title } from "nupes-ui";
import React from "react";
import styles from "./LogoHeader.module.css";

const LogoHeader: React.FC = () => {
  return (
    <div className={styles.logoHeaderContainer}>
      <Title className={styles.logoHeaderTitle}>
        <div className={styles.firstName}>Julia</div>
        <div className={styles.lastName}>MIGNACCA</div>
      </Title>
      <div className={styles.logoContainer}>
        <NupesLogo />
      </div>
    </div>
  );
};

export default LogoHeader;
