interface GetFormattedPriceProps {
  price: number;
  currency: Intl.NumberFormatOptions["currency"];
}

export const getFormattedPrice = ({ price, currency }: GetFormattedPriceProps) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(price / 100);
};
