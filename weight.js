// ========== CONVERSIONS FROM KILOGRAM TO OTHER UNITS ========== //

// Trigger the convert from Kilogram functions upon data input
const kilogramElement = document.getElementById("kilogram");
usdElement.addEventListener('input', (event) => { 
  const { target } = event;
  let kilogram = target.value;
  convertKilogramToGram(kilogram);
  convertKilogramToMilligram(kilogram);
  convertKilogramToPound(kilogram);
  convertKilogramToOunce(kilogram);
  convertKilogramToStone(kilogram);
});

// Convert Kilogram to Gram
function convertKilogramToGram(kilogram) {
  const kilogramGramElement = document.getElementById("gram");
  let kilogramGram = kilogram * 1000;
  kilogramGram = Number(kilogramGram.toFixed(2));
  kilogramGramElement.value = kilogramGram;
}

// Convert Kilogram to Milligram
function convertKilogramToMilligram(kilogram) {
  const kilogramMilligramElement = document.getElementById("milligram");
  let kilogramMilligram = kilogram * 1000000;
  kilogramMilligram = Number(kilogramMilligram.toFixed(2));
  kilogramMilligramElement.value = kilogramMilligram;
}

// Convert Kilogram to Pound
function convertKilogramToPound(kilogram) {
  const kilogramPoundElement = document.getElementById("pound");
  let kilogramPound = kilogram * 2.20462262185;
  kilogramPound = Number(kilogramPound.toFixed(7));
  kilogramPoundElement.value = kilogramPound;
}

// Convert Kilogram to Ounce
function convertKilogramToOunce(kilogram) {
  const kilogramOunceElement = document.getElementById("ounce");
  let kilogramOunce = kilogram * 35.274;
  kilogramOunce = Number(kilogramOunce.toFixed(5));
  kilogramOunceElement.value = kilogramOunce;
}

// Convert Kilogram to Stone
function convertKilogramToStone(kilogram) {
  const kilogramStoneElement = document.getElementById("stone");
  let kilogramStone = kilogram / 6.35029318;
  kilogramStone = Number(kilogramStone.toFixed(7));
  kilogramStoneElement.value = kilogramStone;
}

// ========== CONVERSIONS FROM GRAM TO OTHER UNITS ========== //

// Trigger the convert from Gram functions upon data input
const gramElement = document.getElementById("gram");
gramElement.addEventListener('input', (event) => { 
  const { target } = event;
  let gram = target.value;
  convertGramToKilogram(gram);
  convertGramToMilligram(gram);
  convertGramToPound(gram);
  convertGramToOunce(gram);
  convertGramToStone(gram);
});

// Convert Gram to Kilogram
function convertGramToKilogram(gram) {
  const gramKilogramElement = document.getElementById("kilogram");
  let gramKilogram = gram / 1000;
  gramKilogram = Number(gramKilogram.toFixed(6));
  gramKilogramElement.value = gramKilogram;
}

// Convert Gram to Milligram
function convertGramToMilligram(gram) {
  const gramMilligramElement = document.getElementById("milligram");
  let gramMilligram = gram * 1000;
  gramMilligram = Number(gramMilligram.toFixed(6));
  gramMilligramElement.value = gramMilligram;
}

// Convert Gram to Pound
function convertGramToPound(gram) {
  const gramPoundElement = document.getElementById("pound");
  let gramPound = gram / 453.592;
  gramPound = Number(gramPound.toFixed(6));
  gramPoundElement.value = gramPound;
}

// Convert Gram to Ounce
function convertGramToOunce(gram) {
  const gramOunceElement = document.getElementById("ounce");
  let gramOunce = gram / 28.34952;
  gramOunce = Number(gramOunce.toFixed(6));
  gramOunceElement.value = gramOunce;
}

// Convert Gram to Stone
function convertGramToStone(gram) {
  const gramStoneElement = document.getElementById("stone");
  let gramStone = gram * 0.000157473;
  gramStone = Number(gramStone.toFixed(6));
  gramStoneElement.value = gramStone;
}

// ========== CONVERSIONS FROM MILLIGRAM TO OTHER UNITS ========== //

// Trigger the convert from Milligram functions upon data input
const milligramElement = document.getElementById("milligram");
milligramElement.addEventListener('input', (event) => { 
  const { target } = event;
  let milligram = target.value;
  convertMilligramToKilogram(milligram);
  convertMilligramToGram(milligram);
  convertMilligramToPound(milligram);
  convertMilligramToOunce(milligram);
  convertMilligramToStone(milligram);
});

// Convert Milligram to Kilogram
function convertMilligramToKilogram(milligram) {
  const milligramKilogramElement = document.getElementById("kilogram");
  let milligramKilogram = milligram / 1000000;
  milligramKilogram = Number(milligramKilogram.toFixed(6));
  milligramKilogramElement.value = milligramKilogram;
}

// Convert Milligram to Gram
function convertMilligramToGram(milligram) {
  const milligramGramElement = document.getElementById("gram");
  let milligramGram = milligram / 1000;
  milligramGram = Number(milligramGram.toFixed(6));
  milligramGramElement.value = milligramGram;
}

// Convert Milligram to Pound
function convertMilligramToPound(milligram) {
  const milligramPoundElement = document.getElementById("pound");
  let milligramPound = milligram / 453592.37;
  milligramPound = Number(milligramPound.toFixed(6));
  milligramPoundElement.value = milligramPound;
}

// Convert Milligram to Ounce
function convertMilligramToOunce(milligram) {
  const milligramOunceElement = document.getElementById("ounce");
  let milligramOunce = milligram / 28350;
  milligramOunce = Number(milligramOunce.toFixed(6));
  milligramOunceElement.value = milligramOunce;
}

// Convert Milligram to Stone
function convertMilligramToStone(milligram) {
  const milligramStoneElement = document.getElementById("stone");
  let milligramStone = milligram / 6350293.18;
  milligramStone = Number(milligramStone.toFixed(6));
  milligramStoneElement.value = milligramStone;
}

// ========== CONVERSIONS FROM POUND TO OTHER UNITS ========== //

// Trigger the convert from Pound functions upon data input
const poundElement = document.getElementById("pound");
poundElement.addEventListener('input', (event) => { 
  const { target } = event;
  let pound = target.value;
  convertPoundToKilogram(pound);
  convertPoundToGram(pound);
  convertPoundToMilligram(pound);
  convertPoundToOunce(pound);
  convertPoundToStone(pound);
});

// Convert Pound to Kilogram
function convertPoundToKilogram(pound) {
  const poundKilogramElement = document.getElementById("kilogram");
  let poundKilogram = pound / 2.205;
  poundKilogram = Number(poundKilogram.toFixed(6));
  poundKilogramElement.value = poundKilogram;
}

// Convert Pound to Gram
function convertPoundToGram(pound) {
  const poundGramElement = document.getElementById("gram");
  let poundGram = pound * 453.59237;
  poundGram = Number(poundGram.toFixed(6));
  poundGramElement.value = poundGram;
}

// Convert Pound to Milligram
function convertPoundToMilligram(pound) {
  const poundMilligramElement = document.getElementById("milligram");
  let poundMilligram = pound * 453592.37;
  poundMilligram = Number(poundMilligram.toFixed(6));
  poundMilligramElement.value = poundMilligram;
}

// Convert Pound to Ounce
function convertPoundToOunce(pound) {
  const poundOunceElement = document.getElementById("ounce");
  let poundOunce = pound * 16;
  poundOunce = Number(poundOunce.toFixed(6));
  poundOunceElement.value = poundOunce;
}

// Convert Pound to Stone
function convertPoundToStone(pound) {
  const poundStoneElement = document.getElementById("stone");
  let poundStone = pound / 14;
  poundStone = Number(poundStone.toFixed(6));
  poundStoneElement.value = poundStone;
}

// ========== CONVERSIONS FROM OUNCE TO OTHER UNITS ========== //

// Trigger the convert from Ounce functions upon data input
const ounceElement = document.getElementById("ounce");
ounceElement.addEventListener('input', (event) => { 
  const { target } = event;
  let ounce = target.value;
  convertOunceToKilogram(ounce);
  convertOunceToGram(ounce);
  convertOunceToMilligram(ounce);
  convertOunceToPound(ounce);
  convertOunceToStone(ounce);
});

// Convert Ounce to Kilogram
function convertOunceToKilogram(ounce) {
  const ounceKilogramElement = document.getElementById("kilogram");
  let ounceKilogram = ounce / 35.274;
  ounceKilogram = Number(ounceKilogram.toFixed(6));
  ounceKilogramElement.value = ounceKilogram;
}

// Convert Ounce to Gram
function convertOunceToGram(ounce) {
  const ounceGramElement = document.getElementById("gram");
  let ounceGram = ounce * 28.34952;
  ounceGram = Number(ounceGram.toFixed(6));
  ounceGramElement.value = ounceGram;
}

// Convert Ounce to Milligram
function convertOunceToMilligram(ounce) {
  const ounceMilligramElement = document.getElementById("milligram");
  let ounceMilligram = ounce * 28349.52;
  ounceMilligram = Number(ounceMilligram.toFixed(6));
  ounceMilligramElement.value = ounceMilligram;
}

// Convert Ounce to Pound
function convertOunceToPound(ounce) {
  const ouncePoundElement = document.getElementById("pound");
  let ouncePound = ounce / 16;
  ouncePound = Number(ouncePound.toFixed(6));
  ouncePoundElement.value = ouncePound;
}

// Convert Ounce to Stone
function convertOunceToStone(ounce) {
  const ounceStoneElement = document.getElementById("stone");
  let ounceStone = ounce / 224;
  ounceStone = Number(ounceStone.toFixed(6));
  ounceStoneElement.value = ounceStone;
}

// ========== CONVERSIONS FROM STONE TO OTHER UNITS ========== //

// Trigger the convert from Stone functions upon data input
const stoneElement = document.getElementById("stone");
stoneElement.addEventListener('input', (event) => { 
  const { target } = event;
  let stone = target.value;
  convertStoneToKilogram(stone);
  convertStoneToGram(stone);
  convertStoneToMilligram(stone);
  convertStoneToPound(stone);
  convertStoneToOunce(stone);
});

// Convert Stone to Kilogram
function convertStoneToKilogram(stone) {
  const stoneKilogramElement = document.getElementById("kilogram");
  let stoneKilogram = stone * 6.350293;
  stoneKilogram = Number(stoneKilogram.toFixed(6));
  stoneKilogramElement.value = stoneKilogram;
}

// Convert Stone to Gram
function convertStoneToGram(stone) {
  const stoneGramElement = document.getElementById("gram");
  let stoneGram = stone * 6350.293;
  stoneGram = Number(stoneGram.toFixed(6));
  stoneGramElement.value = stoneGram;
}

// Convert Stone to Milligram
function convertStoneToMilligram(stone) {
  const stoneMilligramElement = document.getElementById("milligram");
  let stoneMilligram = stone * 6350293;
  stoneMilligram = Number(stoneMilligram.toFixed(6));
  stoneMilligramElement.value = stoneMilligram;
}

// Convert Stone to Pound
function convertStoneToPound(stone) {
  const stonePoundElement = document.getElementById("pound");
  let stonePound = stone * 14;
  stonePound = Number(stonePound.toFixed(6));
  stonePoundElement.value = stonePound;
}

// Convert Stone to Ounce
function convertStoneToOunce(stone) {
  const stoneOunceElement = document.getElementById("ounce");
  let stoneOunce = stone * 224;
  stoneOunce = Number(stoneOunce.toFixed(6));
  stoneOunceElement.value = stoneOunce;
}