const cityInput = document.querySelector("#city-input")
const searchBtn = document.querySelector("#search-btn")
const cityName = document.querySelector("#city-name")
const temperature = document.querySelector("#temperature")
const condition = document.querySelector("#condition")
const errorMsg = document.querySelector("#error-msg")

async function getWeather() {
    const city = cityInput.value;
    const apiKey = "eac21a6ee788776bd3ebfed33fd32a97";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        cityName.textContent = data.name;
        temperature.textContent = `Temperature: ${data.main.temp} °C`;
        condition.textContent = `Current Condition is : ${data.weather[0].description}`
    } catch (error) {
        errorMsg.textContent = error.message;
    }
}

searchBtn.addEventListener("click", getWeather);