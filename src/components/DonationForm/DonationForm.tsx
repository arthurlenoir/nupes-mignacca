import { Button, Modal, OtherColors, Title } from "nupes-ui";
import React, { useCallback, useMemo, useState } from "react";
import styled, { css } from "styled-components";
import { ArrowIcon } from "../Icons";
import DonationModal from "./DonationModal";
import SuggestedDonation, { DonationContainer } from "./SuggestedDonation";

const DonationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DonationSuggestionListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px -8px;
  flex-wrap: wrap;
  align-self: stretch;
`;

const CustomInputContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  background-color: ${OtherColors.WHITE};
  border-radius: 8px;
  padding: 0 8px;
`;
const CustomInput = styled.input`
  flex: 1;
  width: 1%;
  background: none;
  border: 0;
  min-width: 0;
  align-self: stretch;
  font-size: 18px;
  line-height: 100%;
  text-align: center;
`;

const CustomInputSubmit = styled.button`
  height: 43px;
  flex: 0 0 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  outline: 0;
  margin: 0 0 0 8px;
  border-radius: 8px;
  ${({ theme }) => css`
    background-color: ${theme.colors.primary.background};
  `}
`;

interface Props {
  suggestions?: number[];
}

const DonationForm: React.FC<Props> = ({ suggestions }) => {
  const [selectedDonation, setSelectedDonation] = useState<number>(-1);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [customAmount, setCustomAmount] = useState<string>("");

  const showModal = useCallback(() => setModalVisible(true), [setModalVisible]);
  const hideModal = useCallback(
    () => setModalVisible(false),
    [setModalVisible]
  );
  const selectedAmount = useMemo(() => {
    if (selectedDonation < 0 || selectedDonation >= suggestions.length)
      return 0;
    return suggestions[selectedDonation];
  }, [suggestions, selectedDonation]);
  const renderSuggestion = useCallback(
    (suggestedDonation: number, index: number) => (
      <SuggestedDonation
        key={index}
        index={index}
        donation={suggestedDonation}
        setSelectedDonation={setSelectedDonation}
        selectedDonation={selectedDonation}
      />
    ),
    [setSelectedDonation, selectedDonation]
  );

  const onCustomAmountChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setCustomAmount(e.currentTarget.value);
    },
    [setCustomAmount]
  );

  const selectCustomDonation = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      showModal();
    },
    [showModal]
  );

  return (
    <>
      <DonationsContainer>
        <DonationSuggestionListContainer>
          {suggestions && suggestions.map(renderSuggestion)}
          <DonationContainer as="form" onSubmit={selectCustomDonation}>
            <CustomInputContainer>
              <CustomInput
                value={customAmount}
                onChange={onCustomAmountChange}
              />
              <span>€</span>
            </CustomInputContainer>
            <CustomInputSubmit>
              <ArrowIcon />
            </CustomInputSubmit>
          </DonationContainer>
        </DonationSuggestionListContainer>
        <DonationModal
          visible={modalVisible}
          close={hideModal}
          selectedAmount={selectedAmount}
        />
      </DonationsContainer>
    </>
  );
};

export default DonationForm;

// https://script.google.com/macros/s/AKfycbwPLxUkHeXSDjbQbSHXejWCKY1P0AuWk9oVm0XExQzuJYZJAI1mneojEuEUa2eIMcZ-/exec?lastName=Lenoir&firstName=Arthur&amount=1000&email=lenoir.arthur@gmail.com&phone=0661229371
