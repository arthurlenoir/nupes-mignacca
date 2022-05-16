import { Button } from "nupes-ui";
import React, { useCallback } from "react";
import styled from "styled-components";

interface Props {
  donation: number;
  index: number;
  setSelectedDonation: (donationIndex: number) => void;
  selectedDonation: number;
}

const StyledButton = styled(Button)`
  margin: 8px;
`;

const hasDecimal = (value: number): boolean => {
  return Math.floor(value) - value !== 0;
};

const SuggestedDonation: React.FC<Props> = ({
  donation,
  index,
  setSelectedDonation,
  selectedDonation,
}) => {
  const onClick = useCallback(() => {
    setSelectedDonation(index);
  }, [setSelectedDonation, index]);
  const minimumFractionDigits = hasDecimal(donation) ? 2 : 0;
  return (
    <StyledButton
      onClick={onClick}
      variant={selectedDonation === index ? "secondary" : undefined}
    >
      {donation.toLocaleString(navigator.language || "fr", {
        style: "currency",
        currencyDisplay: "narrowSymbol",
        currency: "EUR",
        minimumFractionDigits,
      })}
    </StyledButton>
  );
};

export default SuggestedDonation;
