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

// ========== CONVERSIONS FROM FAHRENHEIT TO OTHER UNITS ========== //

// Trigger the convert from Fahrenheit functions upon data input
const fahrenheitElement = document.getElementById("fahrenheit");
fahrenheitElement.addEventListener('input', (event) => { 
  const { target } = event;
  let fahrenheit = target.value;
  convertFromFahrenheit(fahrenheit, 'celsius');
  convertFromFahrenheit(fahrenheit, 'kelvin');
});

// Convert from Fahrenheit to other units
function convertFromFahrenheit(fahrenheit, targetUnit) {
  const element = document.getElementById(targetUnit);
  let conversion;
  let decimalPoint;
  if (targetUnit === 'celsius') conversion = ((fahrenheit - 32) * 5) / 9, decimalPoint = 2;
  if (targetUnit === 'kelvin') conversion = ((fahrenheit - 32) * 5/9) + 273.15, decimalPoint = 2;
  conversion = Number(conversion.toFixed(decimalPoint));
  element.value = conversion;
}

// ========== CONVERSIONS FROM KELVIN TO OTHER UNITS ========== //

// Trigger the convert from Kelvin functions upon data input
const kelvinElement = document.getElementById("kelvin");
kelvinElement.addEventListener('input', (event) => { 
  const { target } = event;
  let kelvin = target.value;
  convertFromKelvin(kelvin, 'celsius');
  convertFromKelvin(kelvin, 'fahrenheit');
});

// Convert from Kelvin to other units
function convertFromKelvin(kelvin, targetUnit) {
  const element = document.getElementById(targetUnit);
  let conversion;
  let decimalPoint;
  if (targetUnit === 'celsius') conversion = kelvin - 273.15, decimalPoint = 2;
  if (targetUnit === 'fahrenheit') conversion = (kelvin - 273.15) * 9/5 + 32, decimalPoint = 2;
  conversion = Number(conversion.toFixed(decimalPoint));
  element.value = conversion;
}