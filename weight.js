// ========== CONVERSIONS FROM KILOGRAM TO OTHER UNITS ========== //

// Trigger the convert from Kilogram functions upon data input
const kilogramElement = document.getElementById("kilogram");
kilogramElement.addEventListener('input', (event) => { 
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