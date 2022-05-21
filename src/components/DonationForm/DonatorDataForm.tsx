import { Button, Input } from "nupes-ui";
import React, { useCallback, useState } from "react";
import Text from "../Text/Text";
import { useSaveDonation } from "./hooks";
import styles from "./Donation.module.css";

interface Props {
  close: () => void;
  selectedAmount: number;
}

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
        Merci de remplir le formulaire suivant, nous vous recontacterons
        prochainement pour finaliser votre don.
      </Text>
      <Input
        label="Prénom"
        type="text"
        name="firstName"
        value={firstName}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setFirstName(e.currentTarget.value);
        }}
        autoComplete="on"
        autoFocus
      />
      <Input
        type="text"
        name="lastName"
        label="Nom"
        value={lastName}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setLastName(e.currentTarget.value);
        }}
        autoComplete="on"
      />
      <Input
        type="email"
        name="email"
        label="adresse e-mail"
        value={email}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setEmail(e.currentTarget.value);
        }}
        autoComplete="on"
      />
      <Input
        type="phone"
        name="phone"
        label="Téléphone"
        value={phone}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setPhone(e.currentTarget.value);
        }}
        autoComplete="on"
      />
      <Button
        type="submit"
        variant="primary"
        size="big"
        className={styles.dataFormButton}
      >
        Valider
      </Button>
    </form>
  );
};

export default DonatorDataForm;
