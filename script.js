// Function to fetch weather data based on user input
async function getWeather() {
    const locationInput = document.getElementById('location').value.trim();
    if (locationInput === '') {
        alert('Please enter a location.');
        return;
    }

    const apiKey = 'b887754068e5fc59ed932982ed13691a'; // Replace with your own API key
    const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            displayWeather(data);
        } else {
            alert(`Error: ${data.message}`);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Failed to fetch weather data. Please try again.');
    }
}

// Function to display weather information on the webpage
function displayWeather(data) {
    document.getElementById('location-name').textContent = data.name;
    document.getElementById('weather-description').textContent = data.weather[0].description;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
}
