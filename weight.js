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

// ========== CONVERSIONS FROM GRAM TO OTHER UNITS ========== //

// Trigger the convert from Gram functions upon data input
const gramElement = document.getElementById("gram");
gramElement.addEventListener('input', (event) => { 
  const { target } = event;
  let gram = target.value;
  convertFromPound(gram, 'kilogram');
  convertFromPound(gram, 'milligram');
  convertFromPound(gram, 'pound');
  convertFromPound(gram, 'ounce');
  convertFromPound(gram, 'stone');
});

// Convert from Gram to other units
function convertFromPound(gram, targetUnit) {
  const element = document.getElementById(targetUnit);
  let conversion;
  let decimalPoint;
  if (targetUnit === 'kilogram') conversion = gram / 1000, decimalPoint = 6;
  if (targetUnit === 'milligram') conversion = gram * 1000, decimalPoint = 6;
  if (targetUnit === 'pound') conversion = gram / 453.592, decimalPoint = 6;
  if (targetUnit === 'ounce') conversion = gram / 28.34952, decimalPoint = 6;
  if (targetUnit === 'stone') conversion = gram * 0.000157473, decimalPoint = 6;
  conversion = Number(conversion.toFixed(decimalPoint));
  element.value = conversion;
}

// ========== CONVERSIONS FROM MILLIGRAM TO OTHER UNITS ========== //

// Trigger the convert from Milligram functions upon data input
const milligramElement = document.getElementById("milligram");
milligramElement.addEventListener('input', (event) => { 
  const { target } = event;
  let milligram = target.value;
  convertFromPound(milligram, 'kilogram');
  convertFromPound(milligram, 'gram');
  convertFromPound(milligram, 'pound');
  convertFromPound(milligram, 'ounce');
  convertFromPound(milligram, 'stone');
});

// Convert from Milligram to other units
function convertFromPound(milligram, targetUnit) {
  const element = document.getElementById(targetUnit);
  let conversion;
  let decimalPoint;
  if (targetUnit === 'kilogram') conversion = milligram / 1000000, decimalPoint = 6;
  if (targetUnit === 'gram') conversion = milligram / 1000, decimalPoint = 6;
  if (targetUnit === 'pound') conversion = milligram / 453592.37, decimalPoint = 6;
  if (targetUnit === 'ounce') conversion = milligram / 28350, decimalPoint = 6;
  if (targetUnit === 'stone') conversion = milligram / 6350293.18, decimalPoint = 6;
  conversion = Number(conversion.toFixed(decimalPoint));
  element.value = conversion;
}

// ========== CONVERSIONS FROM POUND TO OTHER UNITS ========== //

// Trigger the convert from Pound functions upon data input
const poundElement = document.getElementById("pound");
poundElement.addEventListener('input', (event) => { 
  const { target } = event;
  let pound = target.value;
  convertFromPound(pound, 'kilogram');
  convertFromPound(pound, 'gram');
  convertFromPound(pound, 'milligram');
  convertFromPound(pound, 'ounce');
  convertFromPound(pound, 'stone');
});

// Convert from Pound to other units
function convertFromPound(pound, targetUnit) {
  const element = document.getElementById(targetUnit);
  let conversion;
  let decimalPoint;
  if (targetUnit === 'kilogram') conversion = pound / 2.205, decimalPoint = 6;
  if (targetUnit === 'gram') conversion = pound * 453.59237, decimalPoint = 6;
  if (targetUnit === 'milligram') conversion = pound * 453592.37, decimalPoint = 6;
  if (targetUnit === 'ounce') conversion = pound * 16, decimalPoint = 6;
  if (targetUnit === 'stone') conversion = pound / 14, decimalPoint = 6;
  conversion = Number(conversion.toFixed(decimalPoint));
  element.value = conversion;
}