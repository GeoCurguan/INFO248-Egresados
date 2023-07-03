// Transform number to currency format CL
export const formatCurrency = (number) => {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(number);
};
