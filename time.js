// ========== CONVERSIONS FROM DAY TO OTHER UNITS ========== //

// Trigger the convert from Day functions upon data input
const dayElement = document.getElementById("day");
dayElement.addEventListener('input', (event) => { 
  const { target } = event;
  let day = target.value;
  convertDayToHour(day);
  convertDayToMinute(day);
  convertDayToSecond(day);
  convertDayToWeek(day);
  convertDayToYear(day);
});

// Convert Day to Hour
function convertDayToHour(day) {
  const dayHourElement = document.getElementById("hour");
  let dayHour = day * 24;
  dayHour = Number(dayHour.toFixed(2));
  dayHourElement.value = dayHour;
}

// Convert Day to Minute
function convertDayToMinute(day) {
  const dayMinuteElement = document.getElementById("minute");
  let dayMinute = day * 1440;
  dayMinute = Number(dayMinute.toFixed(2));
  dayMinuteElement.value = dayMinute;
}

// Convert Day to Second
function convertDayToSecond(day) {
  const daySecondElement = document.getElementById("second");
  let daySecond = day * 86400;
  daySecond = Number(daySecond.toFixed(2));
  daySecondElement.value = daySecond;
}

// Convert Day to Week
function convertDayToWeek(day) {
  const dayWeekElement = document.getElementById("week");
  let dayWeek = day / 7;
  dayWeek = Number(dayWeek.toFixed(2));
  dayWeekElement.value = dayWeek;
}

// Convert Day to Year
function convertDayToYear(day) {
  const dayYearElement = document.getElementById("year");
  let dayYear = day / 365;
  dayYear = Number(dayYear.toFixed(7));
  dayYearElement.value = dayYear;
}

// ========== CONVERSIONS FROM HOUR TO OTHER UNITS ========== //

// Trigger the convert from Hour functions upon data input
const hourElement = document.getElementById("hour");
hourElement.addEventListener('input', (event) => { 
  const { target } = event;
  let hour = target.value;
  convertHourToDay(hour);
  convertHourToMinute(hour);
  convertHourToSecond(hour);
  convertHourToWeek(hour);
  convertHourToYear(hour);
});

// Convert Hour to Day
function convertHourToDay(hour) {
  const hourDayElement = document.getElementById("day");
  let hourDay = hour / 24;
  hourDay = Number(hourDay.toFixed(2));
  hourDayElement.value = hourDay;
}

// Convert Hour to Minute
function convertHourToMinute(hour) {
  const hourMinuteElement = document.getElementById("minute");
  let hourMinute = hour * 60;
  hourMinute = Number(hourMinute.toFixed(2));
  hourMinuteElement.value = hourMinute;
}

// Convert Hour to Second
function convertHourToSecond(hour) {
  const hourSecondElement = document.getElementById("second");
  let hourSecond = hour * 3600;
  hourSecond = Number(hourSecond.toFixed(2));
  hourSecondElement.value = hourSecond;
}

// Convert Hour to Week
function convertHourToWeek(hour) {
  const hourWeekElement = document.getElementById("week");
  let hourWeek = hour / 168;
  hourWeek = Number(hourWeek.toFixed(7));
  hourWeekElement.value = hourWeek;
}

// Convert Hour to Year
function convertHourToYear(hour) {
  const hourYearElement = document.getElementById("year");
  let hourYear = hour / 8760;
  hourYear = Number(hourYear.toFixed(7));
  hourYearElement.value = hourYear;
}