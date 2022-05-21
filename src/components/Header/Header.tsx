import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const backgroundImage = useBaseUrl("/img/cover-background.jpg");
  const mignaccaWebP = useBaseUrl("/img/julia-mignacca.webp");
  const mignaccaPng = useBaseUrl("/img/julia-mignacca.png");
  return (
    <picture
      style={{ backgroundImage: `url("${backgroundImage}")` }}
      className={styles.headerContainer}
    >
      <source srcSet={mignaccaWebP} type="image/webp" />
      <source srcSet={mignaccaPng} type="image/png" />
      <img
        src={mignaccaPng}
        alt="Julia Mignacca"
        className={styles.headerImage}
      />
    </picture>
  );
};

export default Header;
