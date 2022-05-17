import { useCallback } from "react";

export const useSaveDonation = (selectedAmount: number, close: () => void) => {
  return useCallback(
    (firstName: string, lastName: string, email: string, phone: string) => {
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
          window.setTimeout(checkOpen, 250);
        } else {
          close();
        }
      };
      checkOpen();
    },
    [selectedAmount, close]
  );
};
