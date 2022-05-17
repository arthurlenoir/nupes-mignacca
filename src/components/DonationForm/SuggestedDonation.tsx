import { Button } from "nupes-ui";
import React, { useCallback } from "react";
import styled, { css } from "styled-components";

interface Props {
  donation: number;
  index: number;
  setSelectedDonation: (donationIndex: number) => void;
  selectedDonation: number;
}

export const DonationContainer = styled.button`
  border: 0;
  outline: 0;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  flex: 1 0 160px;
  margin: 8px;
  font-size: 18px;
  padding: 6px;
  box-sizing: border-box;
  ${({ theme }) => css`
    background-color: ${theme.colors.primary.lightBackground};
    color: ${theme.colors.primary.foreground};
  `}
`;

const DonationButton = styled(DonationContainer)`
  cursor: pointer;
  ${({ theme }) => css`
    :hover {
      background-color: ${theme.colors.primary.background};
    }
  `}
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
    <DonationButton onClick={onClick}>
      {donation.toLocaleString("fr", {
        style: "currency",
        currencyDisplay: "narrowSymbol",
        currency: "EUR",
        minimumFractionDigits,
      })}
    </DonationButton>
  );
};

export default SuggestedDonation;
