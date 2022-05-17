import { Button } from "nupes-ui";
import React, { useCallback, useMemo } from "react";
import styled, { css } from "styled-components";
import Text from "../Text";
import { renderMoney } from "./renderMoney";

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
const ButtonSecondLine = styled.div``;

const Disclaimer = styled(Text)`
  margin: 32px 0 16px;
  font-size: 13px;
  color: #696969;
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
        <ButtonSecondLine>
          soit {renderMoney(costAfterDiscount)} après réduction d'impôt
        </ButtonSecondLine>
      </StyledButton>
      <StyledButton
        size="big"
        variant="primary"
        onClick={selectSuggestedAmount}
      >
        <ButtonFirstLine>
          Donner {renderMoney(donationSuggestion)}
        </ButtonFirstLine>
        <ButtonSecondLine>
          soit {renderMoney(selectedAmount)} après réduction d'impôt
        </ButtonSecondLine>
      </StyledButton>
      <Disclaimer>
        Les dons sont destinés à l’AFE Julia Mignacca 2022, déclarée à la
        préfecture de l'Hérault, seule habilitée à recevoir les dons en faveur
        du candidate Julia Mignacca, dans le cadre de la campagne pour
        l’élection législatives de 2022.
      </Disclaimer>
    </div>
  );
};

export default DonationSummary;
