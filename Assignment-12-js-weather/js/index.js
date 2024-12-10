import { formateDate } from './utils.js';
/* 
API Key: 6d8fd84e6bae4d9087b102341241012
Base URL: http://api.weatherapi.com/v1
*/
const API_KEY = '6d8fd84e6bae4d9087b102341241012';
const BASE_URL = 'http://api.weatherapi.com/v1';
const city = 'Cairo';

const SEARCH_URL = `${BASE_URL}/search.json?key=${API_KEY}&q=${city}`;
const FORCAST_URL = `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=3&hour=0`;
