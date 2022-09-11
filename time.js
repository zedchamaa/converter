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

// ========== CONVERSIONS FROM MINUTE TO OTHER UNITS ========== //

// Trigger the convert from Minute functions upon data input
const minuteElement = document.getElementById("minute");
minuteElement.addEventListener('input', (event) => { 
  const { target } = event;
  let minute = target.value;
  convertFromMinute(minute, 'day');
  convertFromMinute(minute, 'hour');
  convertFromMinute(minute, 'second');
  convertFromMinute(minute, 'week');
  convertFromMinute(minute, 'year');
});

// Convert from Minute to other units
function convertFromMinute(minute, targetUnit) {
  const element = document.getElementById(targetUnit);
  let conversion;
  let decimalPoint;
  if (targetUnit === 'day') conversion = minute / 1440, decimalPoint = 7;
  if (targetUnit === 'hour') conversion = minute / 60, decimalPoint = 7;
  if (targetUnit === 'second') conversion = minute * 60, decimalPoint = 2;
  if (targetUnit === 'week') conversion = minute / 10080, decimalPoint = 7;
  if (targetUnit === 'year') conversion = minute / 525600, decimalPoint = 7;
  conversion = Number(conversion.toFixed(decimalPoint));
  element.value = conversion;
}

// ========== CONVERSIONS FROM SECOND TO OTHER UNITS ========== //

// Trigger the convert from Second functions upon data input
const secondElement = document.getElementById("second");
secondElement.addEventListener('input', (event) => { 
  const { target } = event;
  let second = target.value;
  convertFromSecond(second, 'day');
  convertFromSecond(second, 'hour');
  convertFromSecond(second, 'minute');
  convertFromSecond(second, 'week');
  convertFromSecond(second, 'year');
});

// Convert from Second to other units
function convertFromSecond(second, targetUnit) {
  const element = document.getElementById(targetUnit);
  let conversion;
  let decimalPoint;
  if (targetUnit === 'day') conversion = second / 86400, decimalPoint = 7;
  if (targetUnit === 'hour') conversion = second / 3600, decimalPoint = 7;
  if (targetUnit === 'minute') conversion = second / 60, decimalPoint = 5;
  if (targetUnit === 'week') conversion = second / 604800, decimalPoint = 7;
  if (targetUnit === 'year') conversion = second * 0.00000003171, decimalPoint = 8;
  conversion = Number(conversion.toFixed(decimalPoint));
  element.value = conversion;
}

// ========== CONVERSIONS FROM WEEK TO OTHER UNITS ========== //

// Trigger the convert from Week functions upon data input
const weekElement = document.getElementById("week");
weekElement.addEventListener('input', (event) => { 
  const { target } = event;
  let week = target.value;
  convertFromWeek(week, 'day');
  convertFromWeek(week, 'hour');
  convertFromWeek(week, 'minute');
  convertFromWeek(week, 'second');
  convertFromWeek(week, 'year');
});

// Convert from Week to other units
function convertFromWeek(week, targetUnit) {
  const element = document.getElementById(targetUnit);
  let conversion;
  let decimalPoint;
  if (targetUnit === 'day') conversion = week * 7, decimalPoint = 2;
  if (targetUnit === 'hour') conversion = week * 168, decimalPoint = 2;
  if (targetUnit === 'minute') conversion = week * 10080, decimalPoint = 7;
  if (targetUnit === 'second') conversion = week * 604800, decimalPoint = 7;
  if (targetUnit === 'year') conversion = week / 52.143, decimalPoint = 7;
  conversion = Number(conversion.toFixed(decimalPoint));
  element.value = conversion;
}

// ========== CONVERSIONS FROM YEAR TO OTHER UNITS ========== //

// Trigger the convert from Year functions upon data input
const yearElement = document.getElementById("year");
yearElement.addEventListener('input', (event) => { 
  const { target } = event;
  let year = target.value;
  convertFromYear(year, 'day');
  convertFromYear(year, 'hour');
  convertFromYear(year, 'minute');
  convertFromYear(year, 'second');
  convertFromYear(year, 'week');
});

// Convert from Year to other units
function convertFromYear(year, targetUnit) {
  const element = document.getElementById(targetUnit);
  let conversion;
  let decimalPoint;
  if (targetUnit === 'day') conversion = year * 365, decimalPoint = 2;
  if (targetUnit === 'hour') conversion = year * 8760, decimalPoint = 2;
  if (targetUnit === 'minute') conversion = year * 525600, decimalPoint = 2;
  if (targetUnit === 'second') conversion = year * 31540000, decimalPoint = 2;
  if (targetUnit === 'week') conversion = year * 52.1429, decimalPoint = 4;
  conversion = Number(conversion.toFixed(decimalPoint));
  element.value = conversion;
}