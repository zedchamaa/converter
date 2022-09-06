// Convert from one currency to another and update the input field accordingly

function convertCurrency(originCurrency, targetCurrency) {
  // fetch the conversion values from https://exchangerate.host/
  const apiURL = `https://api.exchangerate.host/convert?from=${originCurrency}&to=${targetCurrency}`;
  
  getConversion();

  async function getConversion() {
    // fetch the conversion value
    const response = await fetch(apiURL);
    const data = await response.json();

    // store the conversion value and format it to two decimal points
    let conversion = data.result;
    conversion = Number(conversion.toFixed(2));

    // update the target currency with the appropriate conversion value
    const element = document.getElementById(targetCurrency.toLowerCase());
    element.value = conversion;
  }
}

// ========== CONVERSIONS FROM USD TO OTHER UNITS ========== //

// Trigger the convert from USD functions upon data input
const usdElement = document.getElementById("usd");
usdElement.addEventListener('input', (event) => { 
const { target } = event;
let usd = target.value;

// Convert from USD to other currencies
convertCurrency('USD','GBP');
convertCurrency('USD','EUR');
convertCurrency('USD','JPY');
convertCurrency('USD','AUD');
convertCurrency('USD','CAD');
convertCurrency('USD','CHF');
convertCurrency('USD','CNY');
convertCurrency('USD','SEK');
convertCurrency('USD','NZD');

});