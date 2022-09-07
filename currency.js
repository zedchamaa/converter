// Convert from one currency to another and update the input field accordingly

function convertCurrency(amount, originCurrency, targetCurrency) {
  // fetch the conversion values from https://exchangerate.host/
  const apiURL = `https://api.exchangerate.host/convert?from=${originCurrency}&to=${targetCurrency}`;
  
  getConversion();

  async function getConversion() {
    // fetch the conversion value
    const response = await fetch(apiURL);
    const data = await response.json();

    // store the conversion value
    let conversion = data.info.rate;

    // calculate the total conversion value based on user input
    let totalConversion = amount * conversion;
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
let amount = target.value;
amount = Number(amount);

// Convert from USD to other currencies
convertCurrency(amount,'USD','EUR');
convertCurrency(amount,'USD','JPY');
convertCurrency(amount,'USD','GBP');
convertCurrency(amount,'USD','AUD');
convertCurrency(amount,'USD','CAD');
convertCurrency(amount,'USD','CHF');
convertCurrency(amount,'USD','CNY');
convertCurrency(amount,'USD','SEK');
convertCurrency(amount,'USD','NZD');
});