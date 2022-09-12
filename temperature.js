// ========== CONVERSIONS FROM CELSIUS TO OTHER UNITS ========== //

// Trigger the convert from Celsius functions upon data input
const celsiusElement = document.getElementById("celsius");
celsiusElement.addEventListener('input', (event) => { 
  const { target } = event;
  let celsius = target.value;
  convertFromCelsius(celsius, 'fahrenheit');
  convertFromCelsius(celsius, 'kelvin');
});

// Convert from Celsius to other units
function convertFromCelsius(celsius, targetUnit) {
  const element = document.getElementById(targetUnit);
  let conversion;
  let decimalPoint;
  if (targetUnit === 'fahrenheit') conversion = celsius * 9/5 + 32, decimalPoint = 2;
  if (targetUnit === 'kelvin') conversion = (celsius - 0) + 273.15, decimalPoint = 2;
  conversion = Number(conversion.toFixed(decimalPoint));
  element.value = conversion;
}