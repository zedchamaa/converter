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