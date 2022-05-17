import React, { useCallback } from "react";
import styled, { css } from "styled-components";
import { renderMoney } from "./renderMoney";

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

const SuggestedDonation: React.FC<Props> = ({
  donation,
  index,
  setSelectedDonation,
}) => {
  const onClick = useCallback(() => {
    setSelectedDonation(index);
  }, [setSelectedDonation, index]);
  return (
    <DonationButton onClick={onClick}>{renderMoney(donation)}</DonationButton>
  );
};

export default SuggestedDonation;
