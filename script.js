const celsiusElement = document.getElementById("celsius");
celsiusElement.addEventListener('input', (event) => { 
  const { target } = event; 
  console.log(`Target value: ${target.value}`);

  let celsius = target.value;
  convertCelsiusFahrenheit(celsius);

  function convertCelsiusFahrenheit(celsius) {
    let fahrenheitElement = document.getElementById("fahrenheit");
    let fahrenheit = (celsius * 9/5) + 32;
    fahrenheitElement.value = fahrenheit;
    console.log(fahrenheit);
  }
});


// function convertCelsiusFahrenheit(celsius) {
//   let fahrenheitElement = document.getElementById("fahrenheit-unit");
//   let fahrenheit = (celsius * 9/5) + 32;
//   fahrenheitElement.innerHTML = fahrenheit;
//   console.log(fahrenheit);
// }

// convertCelsiusFahrenheit(3);