import { Button, Title } from "nupes-ui";
import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";
import Text from "../Text";
import { useSaveDonation } from "./hooks";

interface Props {
  close: () => void;
  selectedAmount: number;
}

const StyledInput = styled.input`
  font-family: "Acumin Pro";
  font-size: 18px;
  border: 0;
  border-bottom: 2px solid black;
  height: 24px;
  padding: 0;
  margin: 0 0 24px;
  display: block;
  outline: 0;
  width: 100%;
  ${({ theme }) => css`
    border-color: ${theme.colors.primary.background};
  `}
`;

const StyledButton = styled(Button)`
  width: 100%;
  margin: 24px 0 16px;
`;

const DonatorDataForm: React.FC<Props> = ({ close, selectedAmount }) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const saveDonation = useSaveDonation(selectedAmount, close);

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      saveDonation(firstName, lastName, email, phone);
    },
    [selectedAmount, firstName, lastName, email, phone, close]
  );

  return (
    <form onSubmit={onSubmit}>
      <Text>
        Merci de remplir de formulaire suivant, nous vous recontacterons
        prochainement pour finaliser votre don.
      </Text>
      <StyledInput
        type="text"
        name="firstName"
        placeholder="Prénom"
        value={firstName}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setFirstName(e.currentTarget.value);
        }}
        autoComplete="on"
        autoFocus
      />
      <StyledInput
        type="text"
        name="lastName"
        placeholder="Nom"
        value={lastName}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setLastName(e.currentTarget.value);
        }}
        autoComplete="on"
      />
      <StyledInput
        type="email"
        name="email"
        placeholder="adresse e-mail"
        value={email}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setEmail(e.currentTarget.value);
        }}
        autoComplete="on"
      />
      <StyledInput
        type="phone"
        name="phone"
        placeholder="Téléphone"
        value={phone}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setPhone(e.currentTarget.value);
        }}
        autoComplete="on"
      />
      <StyledButton type="submit" variant="primary" size="big">
        Valider
      </StyledButton>
    </form>
  );
};

export default DonatorDataForm;
