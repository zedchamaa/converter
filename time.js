// ========== CONVERSIONS FROM DAY TO OTHER UNITS ========== //

// Trigger the convert from Day functions upon data input
const dayElement = document.getElementById("day");
dayElement.addEventListener('input', (event) => { 
  const { target } = event;
  let day = target.value;
  convertFromDay(day, 'hour');
  convertFromDay(day, 'minute');
  convertFromDay(day, 'second');
  convertFromDay(day, 'week');
  convertFromDay(day, 'year');
});

// Convert from Day to other units
function convertFromDay(day, targetUnit) {
  const element = document.getElementById(targetUnit);
  let conversion;
  let decimalPoint;
  if (targetUnit === 'hour') conversion = day * 24, decimalPoint = 2;
  if (targetUnit === 'minute') conversion = day * 1440, decimalPoint = 2;
  if (targetUnit === 'second') conversion = day * 86400, decimalPoint = 2;
  if (targetUnit === 'week') conversion = day / 7, decimalPoint = 2;
  if (targetUnit === 'year') conversion = day / 365, decimalPoint = 7;
  conversion = Number(conversion.toFixed(decimalPoint));
  element.value = conversion;
}

// ========== CONVERSIONS FROM HOUR TO OTHER UNITS ========== //

// Trigger the convert from Hour functions upon data input
const hourElement = document.getElementById("hour");
hourElement.addEventListener('input', (event) => { 
  const { target } = event;
  let hour = target.value;
  convertFromHour(hour, 'day');
  convertFromHour(hour, 'minute');
  convertFromHour(hour, 'second');
  convertFromHour(hour, 'week');
  convertFromHour(hour, 'year');
});

// Convert from Hour to other units
function convertFromHour(hour, targetUnit) {
  const element = document.getElementById(targetUnit);
  let conversion;
  let decimalPoint;
  if (targetUnit === 'day') conversion = hour / 24, decimalPoint = 2;
  if (targetUnit === 'minute') conversion = hour * 60, decimalPoint = 2;
  if (targetUnit === 'second') conversion = hour * 3600, decimalPoint = 2;
  if (targetUnit === 'week') conversion = hour / 168, decimalPoint = 7;
  if (targetUnit === 'year') conversion = hour / 8760, decimalPoint = 7;
  conversion = Number(conversion.toFixed(decimalPoint));
  element.value = conversion;
}