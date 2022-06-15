import { Button } from "nupes-ui";
import React, { useCallback, useMemo, useState } from "react";
import Supporter from "../Supporter";
import { SupporterType } from "../Supporter/types";
import { supporters } from "./data";
import styles from "./SupportCommittee.module.css";

interface Props {
  limit?: number;
}

const shuffle = () => 0.5 - Math.random();

const renderSupporter = (supporter: SupporterType, index: number) => (
  <Supporter key={index} {...supporter} />
);

const SupportCommittee: React.FC<Props> = ({ limit = 6 }) => {
  const [showAll, setShowAll] = useState<boolean>(false);

  const toggleShowAll = useCallback(() => {
    setShowAll((value) => !value);
  }, [setShowAll]);

  const shuffledSupporters = useMemo(() => [...supporters.slice(0, 4), ...supporters.slice(4).sort(shuffle)], []);
  const filteredSupporters = showAll ? shuffledSupporters : shuffledSupporters.slice(0, limit);
  console.log("filteredSupporters", filteredSupporters.length);
  return (
    <>
      <div className={styles.Container}>
        {filteredSupporters.map(renderSupporter)}
      </div>

      <div className="btn-container">
        <Button
          onClick={toggleShowAll}
          variant="secondary-light"
          className="calendar-btn-link"
        >
          {showAll ? "Cacher les soutiens" : "Voir tous les soutiens"}
        </Button>
      </div>
    </>
  );
};

export default SupportCommittee;
