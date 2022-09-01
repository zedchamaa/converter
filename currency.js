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
}

window.onload = getLatestRates();