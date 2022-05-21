import {
  LogoEELV,
  LogoLFI,
  LogoPCF,
  LogoND,
  LogoPS,
  LogoGenerations,
} from "nupes-ui";
import React from "react";
import styles from "./LogoSoup.module.css";

interface Props {}

const LogoSoup: React.FC<Props> = () => (
  <div className={styles.LogosSoupContainer}>
    <div className={styles.LogoContainer}>
      <LogoEELV height={80} />
    </div>
    <div className={styles.LogoContainer}>
      <LogoLFI height={70} />
    </div>
    <div className={styles.LogoContainer}>
      <LogoPS height={70} />
    </div>
    <div className={styles.LogoContainer}>
      <LogoPCF height={70} />
    </div>
    <div className={styles.LogoContainer}>
      <LogoGenerations width={150} />
    </div>
    <div className={styles.LogoContainer}>
      <LogoND height={60} />
    </div>
  </div>
);

export default LogoSoup;
