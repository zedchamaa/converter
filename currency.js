// Convert from one currency to another and update the input field accordingly

function convertCurrency(originCurrency, targetCurrency) {
  // fetch the conversion values from https://exchangerate.host/
  const apiURL = `https://api.exchangerate.host/convert?from=${originCurrency}&to=${targetCurrency}`;
  
  getConversion();

  async function getConversion() {
    // fetch the conversion value
    const response = await fetch(apiURL);
    const data = await response.json();

    // store the conversion value
    let conversion = data.result;

    // calculate the total conversion value based on user input
    let totalConversion = originCurrency * conversion;
    totalConversion = Number(totalConversion.toFixed(2));

    // update the target currency with the appropriate conversion value
    const element = document.getElementById(targetCurrency.toLowerCase());
    element.value = totalConversion;
  }
}

// ========== CONVERSIONS FROM USD TO OTHER CURRENCIES ========== //

// Trigger the convert from USD functions upon data input
const usdElement = document.getElementById("usd");
usdElement.addEventListener('input', (event) => { 
const { target } = event;
let USD = target.value;

// Convert from USD to other currencies
convertCurrency(USD,'GBP');
convertCurrency(USD,'EUR');
convertCurrency(USD,'JPY');
convertCurrency(USD,'AUD');
convertCurrency(USD,'CAD');
convertCurrency(USD,'CHF');
convertCurrency(USD,'CNY');
convertCurrency(USD,'SEK');
convertCurrency(USD,'NZD');

});

// ========== CONVERSIONS FROM EUR TO OTHER CURRENCIES ========== //

// Trigger the convert from EUR functions upon data input
const eurElement = document.getElementById("eur");
eurElement.addEventListener('input', (event) => { 
const { target } = event;
let EUR = target.value;

// Convert from EUR to other currencies
convertCurrency(EUR,'USD');
convertCurrency(EUR,'JPY');
convertCurrency(EUR,'GBP');
convertCurrency(EUR,'AUD');
convertCurrency(EUR,'CAD');
convertCurrency(EUR,'CHF');
convertCurrency(EUR,'CNY');
convertCurrency(EUR,'SEK');
convertCurrency(EUR,'NZD');

});