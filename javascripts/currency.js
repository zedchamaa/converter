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

// ========== CONVERSIONS FROM BTC TO OTHER CURRENCIES ========== //

// Trigger the convert from BTC functions upon data input
const btcElement = document.getElementById("btc");
btcElement.addEventListener('input', (event) => { 
const { target } = event;
let amount = target.value;
amount = Number(amount);

// Convert from BTC to other currencies
convertCurrency(amount,'BTC','USD');
convertCurrency(amount,'BTC','EUR');
convertCurrency(amount,'BTC','JPY');
convertCurrency(amount,'BTC','GBP');
convertCurrency(amount,'BTC','AUD');
convertCurrency(amount,'BTC','CAD');
convertCurrency(amount,'BTC','CHF');
convertCurrency(amount,'BTC','CNY');
convertCurrency(amount,'BTC','SEK');
convertCurrency(amount,'BTC','NZD');
convertCurrency(amount,'BTC','ZAR');
});

// ========== CONVERSIONS FROM USD TO OTHER CURRENCIES ========== //

// Trigger the convert from USD functions upon data input
const usdElement = document.getElementById("usd");
usdElement.addEventListener('input', (event) => { 
const { target } = event;
let amount = target.value;
amount = Number(amount);

// Convert from USD to other currencies
convertCurrency(amount,'USD','BTC');
convertCurrency(amount,'USD','EUR');
convertCurrency(amount,'USD','JPY');
convertCurrency(amount,'USD','GBP');
convertCurrency(amount,'USD','AUD');
convertCurrency(amount,'USD','CAD');
convertCurrency(amount,'USD','CHF');
convertCurrency(amount,'USD','CNY');
convertCurrency(amount,'USD','SEK');
convertCurrency(amount,'USD','NZD');
convertCurrency(amount,'USD','ZAR');
});

// ========== CONVERSIONS FROM EUR TO OTHER CURRENCIES ========== //

// Trigger the convert from EUR functions upon data input
const eurElement = document.getElementById("eur");
eurElement.addEventListener('input', (event) => { 
const { target } = event;
let amount = target.value;
amount = Number(amount);

// Convert from EUR to other currencies
convertCurrency(amount,'EUR','BTC');
convertCurrency(amount,'EUR','USD');
convertCurrency(amount,'EUR','JPY');
convertCurrency(amount,'EUR','GBP');
convertCurrency(amount,'EUR','AUD');
convertCurrency(amount,'EUR','CAD');
convertCurrency(amount,'EUR','CHF');
convertCurrency(amount,'EUR','CNY');
convertCurrency(amount,'EUR','SEK');
convertCurrency(amount,'EUR','NZD');
convertCurrency(amount,'EUR','ZAR');
});

// ========== CONVERSIONS FROM JPY TO OTHER CURRENCIES ========== //

// Trigger the convert from JPY functions upon data input
const jpyElement = document.getElementById("jpy");
jpyElement.addEventListener('input', (event) => { 
const { target } = event;
let amount = target.value;
amount = Number(amount);

// Convert from JPY to other currencies
convertCurrency(amount,'JPY','BTC');
convertCurrency(amount,'JPY','USD');
convertCurrency(amount,'JPY','EUR');
convertCurrency(amount,'JPY','GBP');
convertCurrency(amount,'JPY','AUD');
convertCurrency(amount,'JPY','CAD');
convertCurrency(amount,'JPY','CHF');
convertCurrency(amount,'JPY','CNY');
convertCurrency(amount,'JPY','SEK');
convertCurrency(amount,'JPY','NZD');
convertCurrency(amount,'JPY','ZAR');
});

// ========== CONVERSIONS FROM GBP TO OTHER CURRENCIES ========== //

// Trigger the convert from GBP functions upon data input
const gbpElement = document.getElementById("gbp");
gbpElement.addEventListener('input', (event) => { 
const { target } = event;
let amount = target.value;
amount = Number(amount);

// Convert from GBP to other currencies
convertCurrency(amount,'GBP','BTC');
convertCurrency(amount,'GBP','USD');
convertCurrency(amount,'GBP','EUR');
convertCurrency(amount,'GBP','JPY');
convertCurrency(amount,'GBP','AUD');
convertCurrency(amount,'GBP','CAD');
convertCurrency(amount,'GBP','CHF');
convertCurrency(amount,'GBP','CNY');
convertCurrency(amount,'GBP','SEK');
convertCurrency(amount,'GBP','NZD');
convertCurrency(amount,'GBP','ZAR');
});

// ========== CONVERSIONS FROM AUD TO OTHER CURRENCIES ========== //

// Trigger the convert from AUD functions upon data input
const audElement = document.getElementById("aud");
audElement.addEventListener('input', (event) => { 
const { target } = event;
let amount = target.value;
amount = Number(amount);

// Convert from AUD to other currencies
convertCurrency(amount,'AUD','BTC');
convertCurrency(amount,'AUD','USD');
convertCurrency(amount,'AUD','EUR');
convertCurrency(amount,'AUD','JPY');
convertCurrency(amount,'AUD','GBP');
convertCurrency(amount,'AUD','CAD');
convertCurrency(amount,'AUD','CHF');
convertCurrency(amount,'AUD','CNY');
convertCurrency(amount,'AUD','SEK');
convertCurrency(amount,'AUD','NZD');
convertCurrency(amount,'AUD','ZAR');
});

// ========== CONVERSIONS FROM CAD TO OTHER CURRENCIES ========== //

// Trigger the convert from CAD functions upon data input
const cadElement = document.getElementById("cad");
cadElement.addEventListener('input', (event) => { 
const { target } = event;
let amount = target.value;
amount = Number(amount);

// Convert from CAD to other currencies
convertCurrency(amount,'CAD','BTC');
convertCurrency(amount,'CAD','USD');
convertCurrency(amount,'CAD','EUR');
convertCurrency(amount,'CAD','JPY');
convertCurrency(amount,'CAD','GBP');
convertCurrency(amount,'CAD','AUD');
convertCurrency(amount,'CAD','CHF');
convertCurrency(amount,'CAD','CNY');
convertCurrency(amount,'CAD','SEK');
convertCurrency(amount,'CAD','NZD');
convertCurrency(amount,'CAD','ZAR');
});

// ========== CONVERSIONS FROM CHF TO OTHER CURRENCIES ========== //

// Trigger the convert from CHF functions upon data input
const chfElement = document.getElementById("chf");
chfElement.addEventListener('input', (event) => { 
const { target } = event;
let amount = target.value;
amount = Number(amount);

// Convert from CHF to other currencies
convertCurrency(amount,'CHF','BTC');
convertCurrency(amount,'CHF','USD');
convertCurrency(amount,'CHF','EUR');
convertCurrency(amount,'CHF','JPY');
convertCurrency(amount,'CHF','GBP');
convertCurrency(amount,'CHF','AUD');
convertCurrency(amount,'CHF','CAD');
convertCurrency(amount,'CHF','CNY');
convertCurrency(amount,'CHF','SEK');
convertCurrency(amount,'CHF','NZD');
convertCurrency(amount,'CHF','ZAR');
});

// ========== CONVERSIONS FROM CNY TO OTHER CURRENCIES ========== //

// Trigger the convert from CNY functions upon data input
const cnyElement = document.getElementById("cny");
cnyElement.addEventListener('input', (event) => { 
const { target } = event;
let amount = target.value;
amount = Number(amount);

// Convert from CNY to other currencies
convertCurrency(amount,'CNY','BTC');
convertCurrency(amount,'CNY','USD');
convertCurrency(amount,'CNY','EUR');
convertCurrency(amount,'CNY','JPY');
convertCurrency(amount,'CNY','GBP');
convertCurrency(amount,'CNY','AUD');
convertCurrency(amount,'CNY','CAD');
convertCurrency(amount,'CNY','CHF');
convertCurrency(amount,'CNY','SEK');
convertCurrency(amount,'CNY','NZD');
convertCurrency(amount,'CNY','ZAR');
});

// ========== CONVERSIONS FROM SEK TO OTHER CURRENCIES ========== //

// Trigger the convert from SEK functions upon data input
const sekElement = document.getElementById("sek");
sekElement.addEventListener('input', (event) => { 
const { target } = event;
let amount = target.value;
amount = Number(amount);

// Convert from SEK to other currencies
convertCurrency(amount,'SEK','BTC');
convertCurrency(amount,'SEK','USD');
convertCurrency(amount,'SEK','EUR');
convertCurrency(amount,'SEK','JPY');
convertCurrency(amount,'SEK','GBP');
convertCurrency(amount,'SEK','AUD');
convertCurrency(amount,'SEK','CAD');
convertCurrency(amount,'SEK','CHF');
convertCurrency(amount,'SEK','CNY');
convertCurrency(amount,'SEK','NZD');
convertCurrency(amount,'SEK','ZAR');
});

// ========== CONVERSIONS FROM NZD TO OTHER CURRENCIES ========== //

// Trigger the convert from NZD functions upon data input
const nzdElement = document.getElementById("nzd");
nzdElement.addEventListener('input', (event) => { 
const { target } = event;
let amount = target.value;
amount = Number(amount);

// Convert from NZD to other currencies
convertCurrency(amount,'NZD','BTC');
convertCurrency(amount,'NZD','USD');
convertCurrency(amount,'NZD','EUR');
convertCurrency(amount,'NZD','JPY');
convertCurrency(amount,'NZD','GBP');
convertCurrency(amount,'NZD','AUD');
convertCurrency(amount,'NZD','CAD');
convertCurrency(amount,'NZD','CHF');
convertCurrency(amount,'NZD','CNY');
convertCurrency(amount,'NZD','SEK');
convertCurrency(amount,'NZD','ZAR');
});

// ========== CONVERSIONS FROM ZAR TO OTHER CURRENCIES ========== //

// Trigger the convert from ZAR functions upon data input
const zarElement = document.getElementById("zar");
zarElement.addEventListener('input', (event) => { 
const { target } = event;
let amount = target.value;
amount = Number(amount);

// Convert from ZAR to other currencies
convertCurrency(amount,'ZAR','BTC');
convertCurrency(amount,'ZAR','USD');
convertCurrency(amount,'ZAR','EUR');
convertCurrency(amount,'ZAR','JPY');
convertCurrency(amount,'ZAR','GBP');
convertCurrency(amount,'ZAR','AUD');
convertCurrency(amount,'ZAR','CAD');
convertCurrency(amount,'ZAR','CHF');
convertCurrency(amount,'ZAR','CNY');
convertCurrency(amount,'ZAR','SEK');
convertCurrency(amount,'ZAR','NZD');
});