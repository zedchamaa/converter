// ========== CONVERSIONS FROM CELSIUS TO OTHER UNITS ========== //

// Trigger the convert from Celsius functions upon data input
const celsiusElement = document.getElementById("celsius");
celsiusElement.addEventListener('input', (event) => { 
  const { target } = event;
  let celsius = target.value;
  convertCelsiusFahrenheit(celsius);
  convertCelsiusKelvin(celsius);
});

// Convert Celsius to Fahrenheit
function convertCelsiusFahrenheit(celsius) {
  let celsiusFahrenheitElement = document.getElementById("fahrenheit");
  let celsiusFahrenheit = celsius * 9/5 + 32;
  celsiusFahrenheit = Number(celsiusFahrenheit.toFixed(2));
  celsiusFahrenheitElement.value = celsiusFahrenheit;
}

// Convert Celsius to Kelvin
function convertCelsiusKelvin(celsius) {
  let celsiusKelvinElement = document.getElementById("kelvin");
  let celsiusKelvin = (celsius - 0) + 273.15;
  celsiusKelvin = Number(celsiusKelvin.toFixed(2));
  celsiusKelvinElement.value = celsiusKelvin;
}

// ========== CONVERSIONS FROM FAHRENHEIT TO OTHER UNITS ========== //

// Trigger the convert from Fahrenheit functions upon data input
const fahrenheitElement = document.getElementById("fahrenheit");
fahrenheitElement.addEventListener('input', (event) => { 
  const { target } = event; 
  let fahrenheit = target.value;
  convertFahrenheitCelsius(fahrenheit);
  convertFahrenheitKelvin(fahrenheit);
});

// Convert Fahrenheit to Celsius
function convertFahrenheitCelsius(fahrenheit) {
  let fahrenheitCelsiusElement = document.getElementById("celsius");
  let fahrenheitCelsius = ((fahrenheit - 32) * 5) / 9;
  fahrenheitCelsius = Number(fahrenheitCelsius.toFixed(2));
  fahrenheitCelsiusElement.value = fahrenheitCelsius;
}

// Convert Fahrenheit to Kelvin
function convertFahrenheitKelvin(fahrenheit) {
  let fahrenheitKelvinElement = document.getElementById("kelvin");
  let fahrenheitKelvin = ((fahrenheit - 32) * 5/9) + 273.15;
  fahrenheitKelvin = Number(fahrenheitKelvin.toFixed(2));
  fahrenheitKelvinElement.value = fahrenheitKelvin;
}

// ========== CONVERSIONS FROM KELVIN TO OTHER UNITS ========== //

// Trigger the convert from Kelvin functions upon data input
const kelvinElement = document.getElementById("kelvin");
kelvinElement.addEventListener('input', (event) => { 
  const { target } = event; 
  let kelvin = target.value;
  convertKelvinCelsius(kelvin);
  convertKelvinFahrenheit(kelvin);
});

// Convert Kelvin to Celsius
function convertKelvinCelsius(kelvin) {
  let kelvinCelsiusElement = document.getElementById("celsius");
  let kelvinCelsius = kelvin - 273.15;
  kelvinCelsius = Number(kelvinCelsius.toFixed(2));
  kelvinCelsiusElement.value = kelvinCelsius;
}

// Convert Kelvin to Fahrenheit
function convertKelvinFahrenheit(kelvin) {
  let kelvinFahrenheitElement = document.getElementById("fahrenheit");
  let kelvinFahrenheit = (kelvin - 273.15) * 9/5 + 32;
  kelvinFahrenheit = Number(kelvinFahrenheit.toFixed(2));
  kelvinFahrenheitElement.value = kelvinFahrenheit;
}