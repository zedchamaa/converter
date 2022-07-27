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
  let kilogramGramElement = document.getElementById("gram");
  let kilogramGram = kilogram * 1000;
  kilogramGram = Number(kilogramGram.toFixed(2));
  kilogramGramElement.value = kilogramGram;
}

// Convert Kilogram to Milligram
function convertKilogramToMilligram(kilogram) {
  let kilogramMilligramElement = document.getElementById("milligram");
  let kilogramMilligram = kilogram * 1000000;
  kilogramMilligram = Number(kilogramMilligram.toFixed(2));
  kilogramMilligramElement.value = kilogramMilligram;
}

// Convert Kilogram to Pound
function convertKilogramToPound(kilogram) {
  let kilogramPoundElement = document.getElementById("pound");
  let kilogramPound = kilogram * 2.20462262185;
  kilogramPound = Number(kilogramPound.toFixed(7));
  kilogramPoundElement.value = kilogramPound;
}

// Convert Kilogram to Ounce
function convertKilogramToOunce(kilogram) {
  let kilogramOunceElement = document.getElementById("ounce");
  let kilogramOunce = kilogram * 35.274;
  kilogramOunce = Number(kilogramOunce.toFixed(5));
  kilogramOunceElement.value = kilogramOunce;
}

// Convert Kilogram to Stone
function convertKilogramToStone(kilogram) {
  let kilogramStoneElement = document.getElementById("stone");
  let kilogramStone = kilogram / 6.35029318;
  kilogramStone = Number(kilogramStone.toFixed(7));
  kilogramStoneElement.value = kilogramStone;
}

