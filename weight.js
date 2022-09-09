// ========== CONVERSIONS FROM KILOGRAM TO OTHER UNITS ========== //

// Trigger the convert from Kilogram functions upon data input
const kilogramElement = document.getElementById("kilogram");
kilogramElement.addEventListener('input', (event) => { 
  const { target } = event;
  let kilogram = target.value;
  convertFromKilogram(kilogram, 'gram');
  convertFromKilogram(kilogram, 'milligram');
  convertFromKilogram(kilogram, 'pound');
  convertFromKilogram(kilogram, 'ounce');
  convertFromKilogram(kilogram, 'stone');
});

// Convert from Kilogram to other units
function convertFromKilogram(kilogram, targetUnit) {
  const element = document.getElementById(targetUnit);
  let conversion;
  let decimalPoint;
  if (targetUnit === 'gram') conversion = kilogram * 1000, decimalPoint = 2;
  if (targetUnit === 'milligram') conversion = kilogram * 1000000, decimalPoint = 2;
  if (targetUnit === 'pound') conversion = kilogram * 2.20462262185, decimalPoint = 7;
  if (targetUnit === 'ounce') conversion = kilogram * 35.274, decimalPoint = 5;
  if (targetUnit === 'stone') conversion = kilogram / 6.35029318, decimalPoint = 7;
  conversion = Number(conversion.toFixed(decimalPoint));
  element.value = conversion;
}