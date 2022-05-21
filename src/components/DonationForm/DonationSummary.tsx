import { Button } from "nupes-ui";
import React, { useCallback, useMemo } from "react";
import styled, { css } from "styled-components";
import Text from "../Text/Text";
import { renderMoney } from "./renderMoney";
import styles from "./Donation.module.css";

interface Props {
  selectedAmount: number;
  selectFinalAmount: (amount: number) => void;
}

const ImportantText = styled(Text)`
  font-weight: bold;
`;

const HighlightedAmount = styled.span`
  height: 24px;
  vertical-align: middle;
  padding: 3px 12px 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1em;
  border-radius: 8px;
  ${({ theme }) => css`
    background-color: ${theme.colors.primary.background};
    color: ${theme.colors.primary.foreground};
    font-weight: bold;
  `}
`;

const StyledButton = styled(Button)`
  display: block;
  width: 100%;
  margin: 16px 0 8px;
  height: auto;
  padding: 8px;
`;

const ButtonFirstLine = styled.div`
  font-weight: bold;
`;

const incomeTaxReduction = 0.34;

const roundMoney = (amount: number) => Math.round(100 * amount) / 100;

const DonationSummary: React.FC<Props> = ({
  selectedAmount,
  selectFinalAmount,
}) => {
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
      <ImportantText>
        Grâce à la réduction d'impôts de 66%, votre don ne vous coûtera que :{" "}
        <HighlightedAmount>{renderMoney(costAfterDiscount)}</HighlightedAmount>
      </ImportantText>
      <Text>
        En donnant maintenant {renderMoney(donationSuggestion)}, votre don ne
        vous coûtera que les {renderMoney(selectedAmount)}  que vous souhaitiez
        donner initialement.
      </Text>
      <StyledButton
        size="big"
        variant="primary-light"
        onClick={keepInitialAmount}
      >
        <ButtonFirstLine>Donner {renderMoney(selectedAmount)}</ButtonFirstLine>
        <div>soit {renderMoney(costAfterDiscount)} après réduction d'impôt</div>
      </StyledButton>
      <StyledButton
        size="big"
        variant="primary"
        onClick={selectSuggestedAmount}
      >
        <ButtonFirstLine>
          Donner {renderMoney(donationSuggestion)}
        </ButtonFirstLine>
        <div>soit {renderMoney(selectedAmount)} après réduction d'impôt</div>
      </StyledButton>
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
