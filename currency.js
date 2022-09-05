// Get the latest USD based currency rates on page load

const baseCurrency = 'USD'; 

const currencies = {
  euro: 'EUR',
  japaneseYen: 'JPY',
  poundSterling: 'GBP',
  australianDollar: 'AUD',
  canadianDollar: 'CAD',
  swissFranc: 'CHF',
  chineseRenminbi: 'CNY',
  swedishKrona: 'SEK',
  newZealandDollar: 'NZD' 
};

const apiURL = `https://api.exchangerate.host/latest&base=${baseCurrency}&symbols=${currencies}`;

async function getLatestRates() {
  const response = await fetch(apiURL);
  const data = await response.json();
  const usdEUR = data.rates.EUR;
  const usdJPY = data.rates.JPY;
  const usdGBP = data.rates.GBP;
  const usdAUD = data.rates.AUD;
  const usdCAD = data.rates.CAD;
  const usdCHF = data.rates.CHF;
  const usdCNY = data.rates.CNY;
  const usdSEK = data.rates.SEK;
  const usdNZD = data.rates.NZD;

  // ========== CONVERSIONS FROM USD TO OTHER UNITS ========== //

  // Trigger the convert from USD functions upon data input
  const usdElement = document.getElementById("usd");
  usdElement.addEventListener('input', (event) => { 
  const { target } = event;
  let usd = target.value;

  // Convert from USD to other currencies
  function convertFrom(usd) {
    // Convert USD to EUR
    convertCurrency(usd, "eur", usdEUR);
    // Convert USD to JPY
    convertCurrency(usd, "jpy", usdJPY);
    // Convert USD to GBP
    convertCurrency(usd, "gbp", usdGBP);
    // Convert USD to AUD
    convertCurrency(usd, "aud", usdAUD);
    // Convert USD to CAD
    convertCurrency(usd, "cad", usdCAD);
    // Convert USD to CHF
    convertCurrency(usd, "chf", usdCHF);
    // Convert USD to CNY
    convertCurrency(usd, "cny", usdCNY);
    // Convert USD to SEK
    convertCurrency(usd, "sek", usdSEK);
    // Convert USD to NZD
    convertCurrency(usd, "nzd", usdNZD);
  }
  
  convertFrom(usd);

  // Convert from one currency to another
  function convertCurrency(originCurrency, targetCurrency, exchangeRate) {
    let conversion = originCurrency * exchangeRate;
    conversion = Number(conversion.toFixed(2));
    const element = document.getElementById(targetCurrency);
    element.value = conversion;
  }

  });
}

window.onload = getLatestRates(); 