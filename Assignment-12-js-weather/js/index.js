import { formateDate } from './utils.js';
import { getForecast } from './utils.js';

const searchIput = document.querySelector('#searchIput');
const weekDayEl = document.querySelector('#weekDay');
const dayAndMonth = document.querySelector('#dayAndMonth');
const locationName = document.querySelector('#locationName');
const degree = document.querySelector('#degree');
const iconImg = document.querySelector('#iconImg');
const dayStatus = document.querySelector('#dayStatus');

const rain = document.querySelector('#rain');
const wind = document.querySelector('#wind');
const windDir = document.querySelector('#windDir');

// TODO: get Current forecast
function currentForecast(data) {
  const { location, current } = data;
  const { name } = location;
  const { temp_c, last_updated, wind_dir, wind_kph, precip_mm } = current;
  const { text, icon } = current.condition;
  const [weekDay, day, month] = formateDate(last_updated);

  weekDayEl.innerHTML = weekDay;
  dayAndMonth.innerHTML = day + month;
  locationName.innerHTML = name;
  degree.innerHTML = `${temp_c}&deg;C`;
  iconImg.src = icon;
  dayStatus.innerHTML = text;
  rain.innerHTML = precip_mm + ' mm';
  wind.innerHTML = wind_kph + 'Km/h';
  windDir.innerHTML = wind_dir;
}
// TODO: get next two days forecast
function nextTwoDaysForecaset(data) {
  const { forecastday } = data.forecast;

  for (let i = 1; i < forecastday.length; i++) {
    const { date, day } = forecastday[i];
    const { maxtemp_c, mintemp_c, condition } = day;
    const { text, icon } = condition;
    const [weekDay] = formateDate(date);

    document.querySelector(`#weekDay-${i}`).innerHTML = weekDay;
    document.querySelector(`#iconImg-${i}`).src = icon;

    document.querySelector(`#maxDegree-${i}`).innerHTML = `${maxtemp_c}&deg;C`;

    document.querySelector(`#minDegree-${i}`).innerHTML = `${mintemp_c}&deg;C`;

    document.querySelector(`#weekDay-${i}`).innerHTML = weekDay;

    document.querySelector(`#dayStatus-${i}`).innerHTML = text;
  }
}
// TODO: display full Wather
async function displayWeather(value) {
  const forecastData = await getForecast(value);
  currentForecast(forecastData);
  nextTwoDaysForecaset(forecastData);
}

// TODO: search cities

searchIput.addEventListener('keyup', async () => {
  const value = searchIput.value;

  if (value.length < 3) return;
  displayWeather(value);
});

displayWeather('Cairo');
