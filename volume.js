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

// ========== CONVERSIONS FROM LITER METER TO OTHER UNITS ========== //

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