import { Button } from "nupes-ui";
import React, { useCallback, useMemo } from "react";
import { useTheme } from "styled-components";
import Text from "../Text/Text";
import { renderMoney } from "./renderMoney";
import styles from "./Donation.module.css";

interface Props {
  selectedAmount: number;
  selectFinalAmount: (amount: number) => void;
}

const incomeTaxReduction = 0.34;

const roundMoney = (amount: number) => Math.round(100 * amount) / 100;

const DonationSummary: React.FC<Props> = ({
  selectedAmount,
  selectFinalAmount,
}) => {
  const theme = useTheme();
  const costAfterDiscount = useMemo(
    () => roundMoney(selectedAmount * incomeTaxReduction),
    [selectedAmount]
  );
  const donationSuggestion = useMemo(
    () => Math.floor(selectedAmount / incomeTaxReduction),
    [selectedAmount]
  );
  const keepInitialAmount = useCallback(() => {
    selectFinalAmount(selectedAmount);
  }, [selectFinalAmount, selectedAmount]);
  const selectSuggestedAmount = useCallback(() => {
    selectFinalAmount(donationSuggestion);
  }, [selectFinalAmount, donationSuggestion]);
  return (
    <div>
      <Text className={styles.importantText}>
        Grâce à la réduction d'impôts de 66%, votre don ne vous coûtera que :{" "}
        <span
          className={styles.highlightedAmount}
          style={{
            backgroundColor: theme.colors.primary.background,
            color: theme.colors.primary.foreground,
          }}
        >
          {renderMoney(costAfterDiscount)}
        </span>
      </Text>
      <Text>
        En donnant maintenant {renderMoney(donationSuggestion)}, votre don ne
        vous coûtera que les {renderMoney(selectedAmount)}  que vous souhaitiez
        donner initialement.
      </Text>
      <Button
        size="big"
        variant="primary-light"
        onClick={keepInitialAmount}
        className={styles.styledButton}
      >
        <div className={styles.buttonFirstLine}>
          Donner {renderMoney(selectedAmount)}
        </div>
        <div>soit {renderMoney(costAfterDiscount)} après réduction d'impôt</div>
      </Button>
      <Button
        size="big"
        variant="primary"
        onClick={selectSuggestedAmount}
        className={styles.styledButton}
      >
        <div className={styles.buttonFirstLine}>
          Donner {renderMoney(donationSuggestion)}
        </div>
        <div>soit {renderMoney(selectedAmount)} après réduction d'impôt</div>
      </Button>
      <Text className={styles.disclaimer}>
        Les dons sont destinés à l’AFE Julia Mignacca 2022, déclarée à la
        préfecture de l'Hérault, seule habilitée à recevoir les dons en faveur
        du candidate Julia Mignacca, dans le cadre de la campagne pour
        l’élection législatives de 2022.
      </Text>
    </div>
  );
};

export default DonationSummary;
