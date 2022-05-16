import { Button, Modal, Title } from "nupes-ui";
import React, { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import DonationModal from "./DonationModal";
import SuggestedDonation from "./SuggestedDonation";

const DonationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DonationSuggestionListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px -8px;
`;

interface Props {
  suggestions?: number[];
}

const DonationForm: React.FC<Props> = ({ suggestions }) => {
  const [selectedDonation, setSelectedDonation] = useState<number>(-1);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
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

  const showModal = useCallback(() => setModalVisible(true), [setModalVisible]);
  const hideModal = useCallback(
    () => setModalVisible(false),
    [setModalVisible]
  );

  return (
    <>
      <Title variant="primary">Soutenir la campagne</Title>
      <DonationContainer>
        <DonationSuggestionListContainer>
          {suggestions && suggestions.map(renderSuggestion)}
        </DonationSuggestionListContainer>
        <Button variant="primary" onClick={showModal}>
          donner
        </Button>
        <DonationModal
          visible={modalVisible}
          close={hideModal}
          selectedAmount={selectedAmount}
        />
      </DonationContainer>
    </>
  );
};

export default DonationForm;

// https://script.google.com/macros/s/AKfycbwPLxUkHeXSDjbQbSHXejWCKY1P0AuWk9oVm0XExQzuJYZJAI1mneojEuEUa2eIMcZ-/exec?lastName=Lenoir&firstName=Arthur&amount=1000&email=lenoir.arthur@gmail.com&phone=0661229371
