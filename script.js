document.addEventListener('DOMContentLoaded', () => {
    const weatherForm = document.getElementById('weather-form');
    const cityInput = document.getElementById('city');
    const weatherResult = document.getElementById('weather-result');

    const apiKey = 'your_openweathermap_api_key';

    weatherForm.onsubmit = async (e) => {
        e.preventDefault();
        const city = cityInput.value.trim();
        if (city !== '') {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            const data = await response.json();
            if (data.cod === 200) {
                weatherResult.innerHTML = `
                    <div class="weather-item"><strong>City:</strong> ${data.name}</div>
                    <div class="weather-item"><strong>Temperature:</strong> ${data.main.temp}°C</div>
                    <div class="weather-item"><strong>Weather:</strong> ${data.weather[0].description}</div>
                `;
            } else {
                weatherResult.innerHTML = `<div class="weather-item">City not found</div>`;
            }
        }
    };
});
