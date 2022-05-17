import { Modal, Title } from "nupes-ui";
import React, { useEffect, useState } from "react";
import DonationSummary from "./DonationSummary";
import DonatorDataForm from "./DonatorDataForm";

interface Props {
  visible: boolean;
  close: () => void;
  selectedAmount: number;
}

const DonationModal: React.FC<Props> = ({ visible, close, selectedAmount }) => {
  const [finalAmount, setFinalAmount] = useState<number>();
  useEffect(() => {
    if (!visible) {
      setFinalAmount(undefined);
    }
  }, [visible, setFinalAmount]);

  return (
    <Modal visible={visible} close={close}>
      <Title variant="primary">Soutenir la campagne</Title>
      {finalAmount ? (
        <DonatorDataForm selectedAmount={finalAmount} close={close} />
      ) : (
        <DonationSummary
          selectedAmount={selectedAmount}
          selectFinalAmount={setFinalAmount}
        />
      )}
    </Modal>
  );
};

export default DonationModal;
