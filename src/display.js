import getWeather from './data';
const errorMessage = document.querySelector('#error-message');
const input = document.querySelector('#city-name-input');
const container = document.querySelector('#container');
export function NewCard(data) {
    container.innerHTML = `
    <div id="weather-card">
        <div id="name">${data.cityName}, ${data.countryName}</div>
        <div id="weather-description">
            <span>${data.weatherDescription}</span>
            <img
                id="weather-image"
                src="https://openweathermap.org/img/wn/${data.weatherIcon}.png"
            />
        </div>
        <div id="temperature">${data.temp}&deg</div>
        <div id="weather-details">
            <div id="feels-like">Feels like: ${data.tempFeelLike}&deg</div>
            <div id="humidity">Humidity: ${data.humidity}%</div>
            <div id="wind-speed">Wind speed: ${data.windSpeed} MPH</div>
        </div>
    </div>`;
}
export function displayError(msg) {
    errorMessage.setAttribute('style', ' visibility:visible');
    errorMessage.textContent = msg;
}
input.addEventListener('keyup', (e) => {
    if (e.code === 'Enter') {
        errorMessage.setAttribute('style', ' visibility:hidden');
        getWeather(input.value);
    }
});
