// ========== CONVERSIONS FROM CUBIC METER TO OTHER UNITS ========== //

// Trigger the convert from Cubic Meter functions upon data input
const cubicMeterElement = document.getElementById("cubic-meter");
cubicMeterElement.addEventListener('input', (event) => { 
  const { target } = event;
  let cubicMeter = target.value;
  convertFromCubicMeter(cubicMeter, 'liter');
  convertFromCubicMeter(cubicMeter, 'cubic-centimeter');
  convertFromCubicMeter(cubicMeter, 'milliliter');
});

// Convert from Cubic Meter to other units
function convertFromCubicMeter(cubicMeter, targetUnit) {
  const element = document.getElementById(targetUnit);
  let conversion;
  let decimalPoint;
  if (targetUnit === 'liter') conversion = cubicMeter * 1000, decimalPoint = 2;
  if (targetUnit === 'cubic-centimeter') conversion = cubicMeter * 1000000, decimalPoint = 2;
  if (targetUnit === 'milliliter') conversion = cubicMeter * 1000000000, decimalPoint = 2;
  conversion = Number(conversion.toFixed(decimalPoint));
  element.value = conversion;
}

// ========== CONVERSIONS FROM LITER TO OTHER UNITS ========== //

// Trigger the convert from Liter functions upon data input
const literElement = document.getElementById("liter");
literElement.addEventListener('input', (event) => { 
  const { target } = event;
  let liter = target.value;
  convertFromLiter(liter, 'cubic-meter');
  convertFromLiter(liter, 'cubic-centimeter');
  convertFromLiter(liter, 'milliliter');
});

// Convert from Liter to other units
function convertFromLiter(liter, targetUnit) {
  const element = document.getElementById(targetUnit);
  let conversion;
  let decimalPoint;
  if (targetUnit === 'cubic-meter') conversion = liter / 1000, decimalPoint = 10;
  if (targetUnit === 'cubic-centimeter') conversion = liter * 1000, decimalPoint = 2;
  if (targetUnit === 'milliliter') conversion = liter * 1000, decimalPoint = 2;
  conversion = Number(conversion.toFixed(decimalPoint));
  element.value = conversion;
}

// ========== CONVERSIONS FROM CUBIC CM TO OTHER UNITS ========== //

// Trigger the convert from Cubic Centimeter functions upon data input
const cubicCmElement = document.getElementById("cubic-centimeter");
cubicCmElement.addEventListener('input', (event) => { 
  const { target } = event;
  let cubicCm = target.value;
  convertFromCubicCm(cubicCm, 'cubic-meter');
  convertFromCubicCm(cubicCm, 'liter');
  convertFromCubicCm(cubicCm, 'milliliter');
});

// Convert from Cubic Centimeter to other units
function convertFromCubicCm(cubicCm, targetUnit) {
  const element = document.getElementById(targetUnit);
  let conversion;
  let decimalPoint;
  if (targetUnit === 'cubic-meter') conversion = cubicCm / 1000000, decimalPoint = 10;
  if (targetUnit === 'liter') conversion = cubicCm / 1000, decimalPoint = 10;
  if (targetUnit === 'milliliter') conversion = cubicCm * 1, decimalPoint = 10;
  conversion = Number(conversion.toFixed(decimalPoint));
  element.value = conversion;
}

// ========== CONVERSIONS FROM MILLILITER TO OTHER UNITS ========== //

// Trigger the convert from Milliliter functions upon data input
const milliliterElement = document.getElementById("milliliter");
milliliterElement.addEventListener('input', (event) => { 
  const { target } = event;
  let milliliter = target.value;
  convertFromMilliliter(milliliter, 'cubic-meter');
  convertFromMilliliter(milliliter, 'liter');
  convertFromMilliliter(milliliter, 'cubic-centimeter');
});

// Convert from Milliliter to other units
function convertFromMilliliter(milliliter, targetUnit) {
  const element = document.getElementById(targetUnit);
  let conversion;
  let decimalPoint;
  if (targetUnit === 'cubic-meter') conversion = milliliter / 1000000, decimalPoint = 10;
  if (targetUnit === 'liter') conversion = milliliter / 1000, decimalPoint = 10;
  if (targetUnit === 'cubic-centimeter') conversion = milliliter * 1, decimalPoint = 10;
  conversion = Number(conversion.toFixed(decimalPoint));
  element.value = conversion;
}