// Transform number to currency format CL
export const formatCurrency = (number) => {
  try {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
    }).format(number);
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const checkUrlImg = (url) => {
  const patronEnlace =
    /^(http|https):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?(\.(jpg|jpeg|png))$/;

  if (url == "") return true;

  return patronEnlace.test(url);
};

export function isNumeric(str) {
  if (typeof str != "string") return false; // we only process strings!
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ); // ...and ensure strings of whitespace fail
}
