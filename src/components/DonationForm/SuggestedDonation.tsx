import React, { useCallback } from "react";
import { useTheme } from "styled-components";
import { renderMoney } from "./renderMoney";
import styles from "./Donation.module.css";

interface Props {
  donation: number;
  index: number;
  setSelectedDonation: (donationIndex: number) => void;
  selectedDonation: number;
}

const SuggestedDonation: React.FC<Props> = ({
  donation,
  index,
  setSelectedDonation,
}) => {
  const theme = useTheme();
  const onClick = useCallback(() => {
    setSelectedDonation(index);
  }, [setSelectedDonation, index]);
  return (
    <button
      onClick={onClick}
      className={`${styles.donationContainer} ${styles.donationButton}`}
      style={{
        backgroundColor: theme.colors.primary.lightBackground,
        color: theme.colors.primary.foreground,
      }}
    >
      {renderMoney(donation)}
    </button>
  );
};

export default SuggestedDonation;
