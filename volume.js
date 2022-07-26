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