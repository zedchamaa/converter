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

// ========== CONVERSIONS FROM MINUTE TO OTHER UNITS ========== //

// Trigger the convert from Minute functions upon data input
const minuteElement = document.getElementById("minute");
minuteElement.addEventListener('input', (event) => { 
  const { target } = event;
  let minute = target.value;
  convertMinuteToDay(minute);
  convertMinuteToHour(minute);
  convertMinuteToSecond(minute);
  convertMinuteToWeek(minute);
  convertMinuteToYear(minute);
});

// Convert Minute to Day
function convertMinuteToDay(minute) {
  const minuteDayElement = document.getElementById("day");
  let minuteDay = minute / 1440;
  minuteDay = Number(minuteDay.toFixed(7));
  minuteDayElement.value = minuteDay;
}

// Convert Minute to Hour
function convertMinuteToHour(minute) {
  const minuteHourElement = document.getElementById("hour");
  let minuteHour = minute / 60;
  minuteHour = Number(minuteHour.toFixed(7));
  minuteHourElement.value = minuteHour;
}

// Convert Minute to Second
function convertMinuteToSecond(minute) {
  const minuteSecondElement = document.getElementById("second");
  let minuteSecond = minute * 60;
  minuteSecond = Number(minuteSecond.toFixed(2));
  minuteSecondElement.value = minuteSecond;
}

// Convert Minute to Week
function convertMinuteToWeek(minute) {
  const minuteWeekElement = document.getElementById("week");
  let minuteWeek = minute / 10080;
  minuteWeek = Number(minuteWeek.toFixed(7));
  minuteWeekElement.value = minuteWeek;
}

// Convert Minute to Year
function convertMinuteToYear(minute) {
  const minuteYearElement = document.getElementById("year");
  let minuteYear = minute / 525600;
  minuteYear = Number(minuteYear.toFixed(7));
  minuteYearElement.value = minuteYear;
}

// ========== CONVERSIONS FROM SECOND TO OTHER UNITS ========== //

// Trigger the convert from Second functions upon data input
const secondElement = document.getElementById("second");
secondElement.addEventListener('input', (event) => { 
  const { target } = event;
  let second = target.value;
  convertSecondToDay(second);
  convertSecondToHour(second);
  convertSecondToMinute(second);
  convertSecondToWeek(second);
  convertSecondToYear(second);
});

// Convert Second to Day
function convertSecondToDay(second) {
  const secondDayElement = document.getElementById("day");
  let secondDay = second / 86400;
  secondDay = Number(secondDay.toFixed(7));
  secondDayElement.value = secondDay;
}

// Convert Second to Hour
function convertSecondToHour(second) {
  const secondHourElement = document.getElementById("hour");
  let secondHour = second / 3600;
  secondHour = Number(secondHour.toFixed(7));
  secondHourElement.value = secondHour;
}

// Convert Second to Minute
function convertSecondToMinute(second) {
  const secondMinuteElement = document.getElementById("minute");
  let secondMinute = second / 60;
  secondMinute = Number(secondMinute.toFixed(5));
  secondMinuteElement.value = secondMinute;
}

// Convert Second to Week
function convertSecondToWeek(second) {
  const secondWeekElement = document.getElementById("week");
  let secondWeek = second / 604800;
  secondWeek = Number(secondWeek.toFixed(7));
  secondWeekElement.value = secondWeek;
}

// Convert Second to Year
function convertSecondToYear(second) {
  const secondYearElement = document.getElementById("year");
  let secondYear = second * 0.00000003171;
  secondYear = Number(secondYear.toFixed(8));
  secondYearElement.value = secondYear;
}