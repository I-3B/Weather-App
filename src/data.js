import { displayError, NewCard } from './display';

async function getWeather(cityName) {
    try {
        let respone = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6e52078bfa4e5a4c88730f298ad0b842&units=metric`,
            { mode: 'cors' }
        );
        let raw = await respone.json();
        if (raw.message) throw new Error(raw.message);
        let data = getData(raw);
        NewCard(data);
    } catch (err) {
        if (err.toString().includes('city not found')) {
            displayError('City not found');
        } else if (err.toString().includes('Failed to fetch')) {
            displayError('Check your internet connection');
        } else {
            displayError(err.toString());
        }
        console.log(err);
    }
}
function formated(oldData) {
    let data = oldData;
    data.temp = Math.round(data.temp);
    data.tempFeelLike = Math.round(data.tempFeelLike);
    return data;
}

function getData(raw) {
    let data = [];
    data.cityName = raw.name;
    data.countryName = raw.sys.country;
    data.temp = raw.main.temp;
    data.tempFeelLike = raw.main.feels_like;
    data.Weather = raw.weather[0].main;
    data.weatherDescription = raw.weather[0].description;
    data.weatherIcon = raw.weather[0].icon;
    data.humidity = raw.main.humidity;
    data.windSpeed = raw.wind.speed;

    data = formated(data);
    return data;
}

export default getWeather;
