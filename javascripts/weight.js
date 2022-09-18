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
  convertFromGram(gram, 'kilogram');
  convertFromGram(gram, 'milligram');
  convertFromGram(gram, 'pound');
  convertFromGram(gram, 'ounce');
  convertFromGram(gram, 'stone');
});

// Convert from Gram to other units
function convertFromGram(gram, targetUnit) {
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
  convertFromMilligram(milligram, 'kilogram');
  convertFromMilligram(milligram, 'gram');
  convertFromMilligram(milligram, 'pound');
  convertFromMilligram(milligram, 'ounce');
  convertFromMilligram(milligram, 'stone');
});

// Convert from Milligram to other units
function convertFromMilligram(milligram, targetUnit) {
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

// ========== CONVERSIONS FROM OUNCE TO OTHER UNITS ========== //

// Trigger the convert from Ounce functions upon data input
const ounceElement = document.getElementById("ounce");
ounceElement.addEventListener('input', (event) => { 
  const { target } = event;
  let ounce = target.value;
  convertFromOunce(ounce, 'kilogram');
  convertFromOunce(ounce, 'gram');
  convertFromOunce(ounce, 'milligram');
  convertFromOunce(ounce, 'pound');
  convertFromOunce(ounce, 'stone');
});

// Convert from Ounce to other units
function convertFromOunce(ounce, targetUnit) {
  const element = document.getElementById(targetUnit);
  let conversion;
  let decimalPoint;
  if (targetUnit === 'kilogram') conversion = ounce / 35.274, decimalPoint = 6;
  if (targetUnit === 'gram') conversion = ounce * 28.34952, decimalPoint = 6;
  if (targetUnit === 'milligram') conversion = ounce * 28349.52, decimalPoint = 6;
  if (targetUnit === 'pound') conversion = ounce / 16, decimalPoint = 6;
  if (targetUnit === 'stone') conversion = ounce / 224, decimalPoint = 6;
  conversion = Number(conversion.toFixed(decimalPoint));
  element.value = conversion;
}

// ========== CONVERSIONS FROM STONE TO OTHER UNITS ========== //

// Trigger the convert from Stone functions upon data input
const stoneElement = document.getElementById("stone");
stoneElement.addEventListener('input', (event) => { 
  const { target } = event;
  let stone = target.value;
  convertFromStone(stone, 'kilogram');
  convertFromStone(stone, 'gram');
  convertFromStone(stone, 'milligram');
  convertFromStone(stone, 'pound');
  convertFromStone(stone, 'ounce');
});

// Convert from Stone to other units
function convertFromStone(stone, targetUnit) {
  const element = document.getElementById(targetUnit);
  let conversion;
  let decimalPoint;
  if (targetUnit === 'kilogram') conversion = stone * 6.350293, decimalPoint = 6;
  if (targetUnit === 'gram') conversion = stone * 6350.293, decimalPoint = 6;
  if (targetUnit === 'milligram') conversion = stone * 6350293, decimalPoint = 6;
  if (targetUnit === 'pound') conversion = stone * 14, decimalPoint = 6;
  if (targetUnit === 'ounce') conversion = stone * 224, decimalPoint = 6;
  conversion = Number(conversion.toFixed(decimalPoint));
  element.value = conversion;
}