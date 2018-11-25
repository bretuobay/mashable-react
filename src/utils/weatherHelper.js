export const roundN = (numInput, decimalPlaces) => {
  const tempVal =
    Math.round(numInput * Math.pow(10, decimalPlaces)) /
    Math.pow(10, decimalPlaces);
  return parseFloat(tempVal.toFixed(decimalPlaces));
}