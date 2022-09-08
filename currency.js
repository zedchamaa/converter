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
    totalConversion = Number(totalConversion.toFixed(4));

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

// ========== CONVERSIONS FROM EUR TO OTHER CURRENCIES ========== //

// Trigger the convert from EUR functions upon data input
const eurElement = document.getElementById("eur");
eurElement.addEventListener('input', (event) => { 
const { target } = event;
let amount = target.value;
amount = Number(amount);

// Convert from EUR to other currencies
convertCurrency(amount,'EUR','USD');
convertCurrency(amount,'EUR','JPY');
convertCurrency(amount,'EUR','GBP');
convertCurrency(amount,'EUR','AUD');
convertCurrency(amount,'EUR','CAD');
convertCurrency(amount,'EUR','CHF');
convertCurrency(amount,'EUR','CNY');
convertCurrency(amount,'EUR','SEK');
convertCurrency(amount,'EUR','NZD');
});

// ========== CONVERSIONS FROM JPY TO OTHER CURRENCIES ========== //

// Trigger the convert from JPY functions upon data input
const jpyElement = document.getElementById("jpy");
jpyElement.addEventListener('input', (event) => { 
const { target } = event;
let amount = target.value;
amount = Number(amount);

// Convert from JPY to other currencies
convertCurrency(amount,'JPY','USD');
convertCurrency(amount,'JPY','EUR');
convertCurrency(amount,'JPY','GBP');
convertCurrency(amount,'JPY','AUD');
convertCurrency(amount,'JPY','CAD');
convertCurrency(amount,'JPY','CHF');
convertCurrency(amount,'JPY','CNY');
convertCurrency(amount,'JPY','SEK');
convertCurrency(amount,'JPY','NZD');
});

// ========== CONVERSIONS FROM GBP TO OTHER CURRENCIES ========== //

// Trigger the convert from GBP functions upon data input
const gbpElement = document.getElementById("gbp");
gbpElement.addEventListener('input', (event) => { 
const { target } = event;
let amount = target.value;
amount = Number(amount);

// Convert from GBP to other currencies
convertCurrency(amount,'GBP','USD');
convertCurrency(amount,'GBP','EUR');
convertCurrency(amount,'GBP','JPY');
convertCurrency(amount,'GBP','AUD');
convertCurrency(amount,'GBP','CAD');
convertCurrency(amount,'GBP','CHF');
convertCurrency(amount,'GBP','CNY');
convertCurrency(amount,'GBP','SEK');
convertCurrency(amount,'GBP','NZD');
});

// ========== CONVERSIONS FROM AUD TO OTHER CURRENCIES ========== //

// Trigger the convert from AUD functions upon data input
const audElement = document.getElementById("aud");
audElement.addEventListener('input', (event) => { 
const { target } = event;
let amount = target.value;
amount = Number(amount);

// Convert from AUD to other currencies
convertCurrency(amount,'AUD','USD');
convertCurrency(amount,'AUD','EUR');
convertCurrency(amount,'AUD','JPY');
convertCurrency(amount,'AUD','GBP');
convertCurrency(amount,'AUD','CAD');
convertCurrency(amount,'AUD','CHF');
convertCurrency(amount,'AUD','CNY');
convertCurrency(amount,'AUD','SEK');
convertCurrency(amount,'AUD','NZD');
});

// ========== CONVERSIONS FROM CHF TO OTHER CURRENCIES ========== //

// Trigger the convert from CHF functions upon data input
const chfElement = document.getElementById("chf");
chfElement.addEventListener('input', (event) => { 
const { target } = event;
let amount = target.value;
amount = Number(amount);

// Convert from CHF to other currencies
convertCurrency(amount,'CHF','USD');
convertCurrency(amount,'CHF','EUR');
convertCurrency(amount,'CHF','JPY');
convertCurrency(amount,'CHF','GBP');
convertCurrency(amount,'CHF','AUD');
convertCurrency(amount,'CHF','CAD');
convertCurrency(amount,'CHF','CNY');
convertCurrency(amount,'CHF','SEK');
convertCurrency(amount,'CHF','NZD');
});

// ========== CONVERSIONS FROM CNY TO OTHER CURRENCIES ========== //

// Trigger the convert from CNY functions upon data input
const cnyElement = document.getElementById("cny");
cnyElement.addEventListener('input', (event) => { 
const { target } = event;
let amount = target.value;
amount = Number(amount);

// Convert from CNY to other currencies
convertCurrency(amount,'CNY','USD');
convertCurrency(amount,'CNY','EUR');
convertCurrency(amount,'CNY','JPY');
convertCurrency(amount,'CNY','GBP');
convertCurrency(amount,'CNY','AUD');
convertCurrency(amount,'CNY','CAD');
convertCurrency(amount,'CNY','CHF');
convertCurrency(amount,'CNY','SEK');
convertCurrency(amount,'CNY','NZD');
});

// ========== CONVERSIONS FROM SEK TO OTHER CURRENCIES ========== //

// Trigger the convert from SEK functions upon data input
const sekElement = document.getElementById("sek");
sekElement.addEventListener('input', (event) => { 
const { target } = event;
let amount = target.value;
amount = Number(amount);

// Convert from SEK to other currencies
convertCurrency(amount,'SEK','USD');
convertCurrency(amount,'SEK','EUR');
convertCurrency(amount,'SEK','JPY');
convertCurrency(amount,'SEK','GBP');
convertCurrency(amount,'SEK','AUD');
convertCurrency(amount,'SEK','CAD');
convertCurrency(amount,'SEK','CHF');
convertCurrency(amount,'SEK','CNY');
convertCurrency(amount,'SEK','NZD');
});