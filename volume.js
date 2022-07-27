//==========CONVERSIONS FROM CUBIC METER==========//

// Trigger the convert from cubic meter functions upon data input
const cubicMeterElement = document.getElementById("cubic-meter");
cubicMeterElement.addEventListener('input', (event) => { 
  const { target } = event;
  let cubicMeter = target.value;
  convertCubicMeterToLiter(cubicMeter);
  convertCubicMeterToCubicCm(cubicMeter);
  convertCubicMeterToMilliliter(cubicMeter);
});

// Convert Cubic meter to Liter
function convertCubicMeterToLiter(cubicMeter) {
  let cubicMeterLiterElement = document.getElementById("liter");
  let cubicMeterLiter = cubicMeter * 1000;
  cubicMeterLiter = Number(cubicMeterLiter.toFixed(2));
  cubicMeterLiterElement.value = cubicMeterLiter;
}

// Convert Cubic meter to Cubic cm
function convertCubicMeterToCubicCm(cubicMeter) {
  let cubicMeterCubicCmElement = document.getElementById("cubic-centimeter");
  let cubicMeterCubicCm = cubicMeter * 1000000;
  cubicMeterCubicCm = Number(cubicMeterCubicCm.toFixed(2));
  cubicMeterCubicCmElement.value = cubicMeterCubicCm;
}

// Convert Cubic meter to Milliliter
function convertCubicMeterToMilliliter(cubicMeter) {
  let cubicMeterMilliliterElement = document.getElementById("milliliter");
  let cubicMeterMilliliter = cubicMeter * 1000000;
  cubicMeterMilliliter = Number(cubicMeterMilliliter.toFixed(2));
  cubicMeterMilliliterElement.value = cubicMeterMilliliter;
}

//==========CONVERSIONS FROM LITER==========//

// Trigger the convert from liter functions upon data input
const literElement = document.getElementById("liter");
literElement.addEventListener('input', (event) => { 
  const { target } = event;
  let liter = target.value;
  convertLiterToCubicMeter(liter);
  convertLiterToCubicCm(liter);
  convertLiterToMilliliter(liter);
});

// Convert from Liter to Cubic meter
function convertLiterToCubicMeter(liter) {
  let literCubicMeterElement = document.getElementById("cubic-meter");
  let literCubicMeter = liter / 1000;
  literCubicMeter = Number(literCubicMeter.toFixed(10));
  literCubicMeterElement.value = literCubicMeter;
}

// Convert Liter to Cubic cm
function convertLiterToCubicCm(liter) {
  let literCubicCmElement = document.getElementById("cubic-centimeter");
  let literCubicCm = liter * 1000;
  literCubicCm = Number(literCubicCm.toFixed(2));
  literCubicCmElement.value = literCubicCm;
}

// Convert Liter to Milliliter
function convertLiterToMilliliter(liter) {
  let literMilliliterElement = document.getElementById("milliliter");
  let literMilliliter = liter * 1000;
  literMilliliter = Number(literMilliliter.toFixed(2));
  literMilliliterElement.value = literMilliliter;
}