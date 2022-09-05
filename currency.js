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
    convertUSD(usd, "eur", usdEUR);
    // Convert USD to JPY
    convertUSD(usd, "jpy", usdJPY);
    // Convert USD to GBP
    convertUSD(usd, "gbp", usdGBP);
    // Convert USD to AUD
    convertUSD(usd, "aud", usdAUD);
    // Convert USD to CAD
    convertUSD(usd, "cad", usdCAD);
    // Convert USD to CHF
    convertUSD(usd, "chf", usdCHF);
    // Convert USD to CNY
    convertUSD(usd, "cny", usdCNY);
    // Convert USD to SEK
    convertUSD(usd, "sek", usdSEK);
    // Convert USD to NZD
    convertUSD(usd, "nzd", usdNZD);
  }
  
  convertFrom(usd);

  // Convert from USD to other currencies
  function convertUSD(originCurrency, targetCurrency, exchangeRate) {
    let conversion = originCurrency * exchangeRate;
    conversion = Number(conversion.toFixed(2));
    const element = document.getElementById(targetCurrency);
    element.value = conversion;
  }

  });

  // ========== CONVERSIONS FROM EUR TO OTHER UNITS ========== //

  // Trigger the convert from EUR functions upon data input
  const eurElement = document.getElementById("eur");
  eurElement.addEventListener('input', (event) => { 
  const { target } = event;
  let eur = target.value;

  // Convert from EUR to other currencies
  function convertFrom(eur) {
    // Convert EUR to USD
    convertEUR(eur, "usd", usdEUR);
    // Convert EUR to JPY
    convertEUR(eur, "jpy", usdJPY);
    // Convert EUR to GBP
    convertEUR(eur, "gbp", usdGBP);
    // Convert EUR to AUD
    convertEUR(eur, "aud", usdAUD);
    // Convert EUR to CAD
    convertEUR(eur, "cad", usdCAD);
    // Convert EUR to CHF
    convertEUR(eur, "chf", usdCHF);
    // Convert EUR to CNY
    convertEUR(eur, "cny", usdCNY);
    // Convert EUR to SEK
    convertEUR(eur, "sek", usdSEK);
    // Convert EUR to NZD
    convertEUR(eur, "nzd", usdNZD);
  }
  
  convertFrom(eur);

  // Convert from EUR to other currencies
  function convertEUR(originCurrency, targetCurrency, exchangeRate) {
    let conversion = exchangeRate / originCurrency;
    conversion = Number(conversion.toFixed(2));
    const element = document.getElementById(targetCurrency);
    element.value = conversion;
  }

  });

}

window.onload = getLatestRates(); 