import { Gauge } from "nupes-ui";
import React, { useCallback, useMemo, useState } from "react";
import { useTheme } from "styled-components";
import GaugeLabel from "../GaugeLabel";
import { ArrowIcon } from "../Icons";
import DonationModal from "./DonationModal";
import SuggestedDonation from "./SuggestedDonation";
import styles from "./Donation.module.css";

interface Props {
  suggestions?: number[];
  value?: number;
  target?: number;
  children: React.ReactNode;
}

const DonationForm: React.FC<Props> = ({
  suggestions,
  value,
  target,
  children,
}) => {
  const theme = useTheme();
  const [selectedDonation, setSelectedDonation] = useState<number>(-1);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [customAmount, setCustomAmount] = useState<string>("");

  const showModal = useCallback(() => setModalVisible(true), [setModalVisible]);
  const hideModal = useCallback(
    () => setModalVisible(false),
    [setModalVisible]
  );
  const selectDonation = useCallback(
    (index: number) => {
      setSelectedDonation(index);
      showModal();
    },
    [showModal, setSelectedDonation]
  );
  const selectedAmount = useMemo(() => {
    if (selectedDonation < 0 || selectedDonation >= suggestions.length) {
      const customAmountAsNumber = parseFloat(customAmount);
      if (!isNaN(customAmountAsNumber)) {
        return customAmountAsNumber;
      }
      return 0;
    }
    return suggestions[selectedDonation];
  }, [suggestions, selectedDonation, customAmount]);

  const renderSuggestion = useCallback(
    (suggestedDonation: number, index: number) => (
      <SuggestedDonation
        key={index}
        index={index}
        donation={suggestedDonation}
        setSelectedDonation={selectDonation}
        selectedDonation={selectedDonation}
      />
    ),
    [selectDonation, selectedDonation]
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
      <div className={styles.donationsContainer}>
        <div className={styles.donationSuggestionListContainer}>
          {suggestions && suggestions.map(renderSuggestion)}
          <form
            className={styles.donationContainer}
            style={{
              backgroundColor: theme.colors.primary.lightBackground,
              color: theme.colors.primary.foreground,
            }}
            onSubmit={selectCustomDonation}
          >
            <div className={styles.customInputContainer}>
              <input
                className={styles.customInput}
                value={customAmount}
                onChange={onCustomAmountChange}
                type="number"
              />
              <span>€</span>
            </div>
            <button
              className={styles.customInputSubmit}
              style={{
                backgroundColor: theme.colors.primary.background,
              }}
            >
              <ArrowIcon />
            </button>
          </form>
        </div>
        {!!value && !!target && (
          <Gauge value={value} target={target}>
            <GaugeLabel value={value} target={target} />
          </Gauge>
        )}

        {children}
        <DonationModal
          visible={modalVisible}
          close={hideModal}
          selectedAmount={selectedAmount}
        />
      </div>
    </>
  );
};

export default DonationForm;
