const API_KEY = '6d8fd84e6bae4d9087b102341241012';
const BASE_URL = 'https://api.weatherapi.com/v1';

export function formateDate(value) {
  const date = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'full',
  })
    .format(new Date(value))
    .split(' ');

  return date;
}

export async function getCity(city) {
  const res = await fetch(`${BASE_URL}/search.json?key=${API_KEY}&q=${city}`);
  const data = await res.json();

  return data[0]?.name;
}

export async function getForecast(value) {
  const city = await getCity(value);

  const res = await fetch(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=3&hour=0`
  );
  const data = await res.json();

  return data;
}
