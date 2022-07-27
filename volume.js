// ========== CONVERSIONS FROM CUBIC METER TO OTHER UNITS ========== //

// Trigger the convert from Cubic Meter functions upon data input
const cubicMeterElement = document.getElementById("cubic-meter");
cubicMeterElement.addEventListener('input', (event) => { 
  const { target } = event;
  let cubicMeter = target.value;
  convertCubicMeterToLiter(cubicMeter);
  convertCubicMeterToCubicCm(cubicMeter);
  convertCubicMeterToMilliliter(cubicMeter);
});

// Convert Cubic Meter to Liter
function convertCubicMeterToLiter(cubicMeter) {
  const cubicMeterLiterElement = document.getElementById("liter");
  let cubicMeterLiter = cubicMeter * 1000;
  cubicMeterLiter = Number(cubicMeterLiter.toFixed(2));
  cubicMeterLiterElement.value = cubicMeterLiter;
}

// Convert Cubic Meter to Cubic Centimeter
function convertCubicMeterToCubicCm(cubicMeter) {
  const cubicMeterCubicCmElement = document.getElementById("cubic-centimeter");
  let cubicMeterCubicCm = cubicMeter * 1000000;
  cubicMeterCubicCm = Number(cubicMeterCubicCm.toFixed(2));
  cubicMeterCubicCmElement.value = cubicMeterCubicCm;
}

// Convert Cubic Meter to Milliliter
function convertCubicMeterToMilliliter(cubicMeter) {
  const cubicMeterMilliliterElement = document.getElementById("milliliter");
  let cubicMeterMilliliter = cubicMeter * 1000000;
  cubicMeterMilliliter = Number(cubicMeterMilliliter.toFixed(2));
  cubicMeterMilliliterElement.value = cubicMeterMilliliter;
}

// ========== CONVERSIONS FROM LITER TO OTHER UNITS ========== //

// Trigger the convert from Liter functions upon data input
const literElement = document.getElementById("liter");
literElement.addEventListener('input', (event) => { 
  const { target } = event;
  let liter = target.value;
  convertLiterToCubicMeter(liter);
  convertLiterToCubicCm(liter);
  convertLiterToMilliliter(liter);
});

// Convert from Liter to Cubic Meter
function convertLiterToCubicMeter(liter) {
  const literCubicMeterElement = document.getElementById("cubic-meter");
  let literCubicMeter = liter / 1000;
  literCubicMeter = Number(literCubicMeter.toFixed(10));
  literCubicMeterElement.value = literCubicMeter;
}

// Convert Liter to Cubic Centimeter
function convertLiterToCubicCm(liter) {
  const literCubicCmElement = document.getElementById("cubic-centimeter");
  let literCubicCm = liter * 1000;
  literCubicCm = Number(literCubicCm.toFixed(2));
  literCubicCmElement.value = literCubicCm;
}

// Convert Liter to Milliliter
function convertLiterToMilliliter(liter) {
  const literMilliliterElement = document.getElementById("milliliter");
  let literMilliliter = liter * 1000;
  literMilliliter = Number(literMilliliter.toFixed(2));
  literMilliliterElement.value = literMilliliter;
}

// ========== CONVERSIONS FROM CUBIC CM TO OTHER UNITS ========== //

// Trigger the convert from Cubic Centimeter functions upon data input
const cubicCmElement = document.getElementById("cubic-centimeter");
cubicCmElement.addEventListener('input', (event) => { 
  const { target } = event;
  let cubicCm = target.value;
  convertCubicCmToCubicMeter(cubicCm);
  convertCubicCmToLiter(cubicCm);
  convertCubicCmToMilliliter(cubicCm);
});

// Convert from Cubic Centimeter to Cubic Meter
function convertCubicCmToCubicMeter(cubicCm) {
  const cubicCmCubicMeterElement = document.getElementById("cubic-meter");
  let cubicCmCubicMeter = cubicCm / 1000000;
  cubicCmCubicMeter = Number(cubicCmCubicMeter.toFixed(10));
  cubicCmCubicMeterElement.value = cubicCmCubicMeter;
}

// Convert Cubic Centimeter to Liter
function convertCubicCmToLiter(cubicCm) {
  const cubicCmLiterElement = document.getElementById("liter");
  let cubicCmLiter = cubicCm / 1000;
  cubicCmLiter = Number(cubicCmLiter.toFixed(10));
  cubicCmLiterElement.value = cubicCmLiter;
}

// Convert Cubic Centimeter to Milliliter
function convertCubicCmToMilliliter(cubicCm) {
  const cubicCmMilliliterElement = document.getElementById("milliliter");
  let cubicCmMilliliter = cubicCm * 1;
  cubicCmMilliliter = Number(cubicCmMilliliter.toFixed(10));
  cubicCmMilliliterElement.value = cubicCmMilliliter;
}

// ========== CONVERSIONS FROM MILLILITER TO OTHER UNITS ========== //

// Trigger the convert from Milliliter functions upon data input
const milliliterElement = document.getElementById("milliliter");
milliliterElement.addEventListener('input', (event) => { 
  const { target } = event;
  let milliliter = target.value;
  convertMilliliterToCubicMeter(milliliter);
  convertMilliliterToLiter(milliliter);
  convertMilliliterToCubicCm(milliliter);
});

// Convert from Milliliter to Cubic Meter
function convertMilliliterToCubicMeter(milliliter) {
  const milliliterCubicMeterElement = document.getElementById("cubic-meter");
  let milliliterCubicMeter = milliliter / 1000000;
  milliliterCubicMeter = Number(milliliterCubicMeter.toFixed(10));
  milliliterCubicMeterElement.value = milliliterCubicMeter;
}

// Convert Milliliter to Liter
function convertMilliliterToLiter(milliliter) {
  const milliliterLiterElement = document.getElementById("liter");
  let milliliterLiter = milliliter / 1000;
  milliliterLiter = Number(milliliterLiter.toFixed(10));
  milliliterLiterElement.value = milliliterLiter;
}

// Convert Milliliter to Cubic Centimeter
function convertMilliliterToCubicCm(milliliter) {
  const milliliterCubicCmElement = document.getElementById("cubic-centimeter");
  let milliliterCubicCm = milliliter * 1;
  milliliterCubicCm = Number(milliliterCubicCm.toFixed(10));
  milliliterCubicCmElement.value = milliliterCubicCm;
}