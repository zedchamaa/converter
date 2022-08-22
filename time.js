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