const hasDecimal = (value: number): boolean => {
  return Math.floor(value) - value !== 0;
};
export const renderMoney = (amount: number) => {
  const minimumFractionDigits = hasDecimal(amount) ? 2 : 0;
  return amount.toLocaleString("fr", {
    style: "currency",
    currencyDisplay: "narrowSymbol",
    currency: "EUR",
    minimumFractionDigits,
  });
};
