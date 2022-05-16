import { Button, Modal, Title } from "nupes-ui";
import React, { useCallback, useState } from "react";

interface Props {
  visible: boolean;
  close: () => void;
  selectedAmount: number;
}

const DonationModal: React.FC<Props> = ({ visible, close, selectedAmount }) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const width = Math.min(500, window.screen.availWidth);
      const height = Math.min(600, window.screen.availHeight);
      const x = window.screenLeft + window.screen.availWidth / 2 - width / 2;
      const y = window.screenTop + window.screen.availHeight / 2 - height / 2;
      const popup = window.open(
        `https://script.google.com/macros/s/AKfycbwPLxUkHeXSDjbQbSHXejWCKY1P0AuWk9oVm0XExQzuJYZJAI1mneojEuEUa2eIMcZ-/exec?lastName=${encodeURIComponent(
          lastName
        )}&firstName=${encodeURIComponent(
          firstName
        )}&amount=${encodeURIComponent(
          selectedAmount
        )}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(
          phone
        )}`,
        "_blank",
        `height=${height},width=${width},top=${y},left=${x},toolbar=no,titlebar=no,status=no,menubar=no`
      );
      const checkOpen = () => {
        if (!popup.closed) {
          window.setTimeout(checkOpen, 500);
        } else {
          console.log("closed!");
          close();
        }
      };
      checkOpen();
    },
    [selectedAmount, firstName, lastName, email, phone, close]
  );

  return (
    <Modal visible={visible} close={close}>
      <Title variant="primary">Faire un don</Title>
      {visible && (
        <form onSubmit={onSubmit}>
          <input
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
          <input
            type="text"
            name="lastName"
            placeholder="Nom"
            value={lastName}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setLastName(e.currentTarget.value);
            }}
            autoComplete="on"
          />
          <input
            type="email"
            name="email"
            placeholder="adresse e-mail"
            value={email}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setEmail(e.currentTarget.value);
            }}
            autoComplete="on"
          />
          <input
            type="phone"
            name="phone"
            placeholder="Téléphone"
            value={phone}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setPhone(e.currentTarget.value);
            }}
            autoComplete="on"
          />
          <Button type="submit" variant="primary" size="big">
            Valider
          </Button>
        </form>
      )}
    </Modal>
  );
};

export default DonationModal;
