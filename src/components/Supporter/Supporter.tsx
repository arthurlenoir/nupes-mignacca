import { Highlight } from "nupes-ui";
import React from "react";
import styles from "./Supporter.module.css";
import { SupporterType } from "./types";

const Supporter: React.FC<SupporterType> = ({
  firstName,
  lastName,
  city,
  occupation,
  message,
}) => (
  <div className={styles.Supporter}>
    <h4 className={styles.Name}>
      <Highlight className={styles.Highlighted} small>
        {firstName} {lastName}
      </Highlight>{" "}
      {occupation && `· ${occupation}`} · {city}
    </h4>
    {message && <p className={styles.Message}>{message}</p>}
  </div>
);

export default Supporter;
