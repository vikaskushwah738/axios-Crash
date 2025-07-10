document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById("city-input");
    const getWhetherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info")
    const cityName = document.getElementById("city-name")
    const temprature = document.getElementById("temp")
    const description = document.getElementById("description")
    const errorMeassge = document.getElementById("error-message")

    const API_key = "bd76d0f4f4f68f2af9a9bbee336c6852"
    console.log('hello');
    getWhetherBtn.addEventListener('click', async () => {
        const city = cityInput.value.trim()
        if (!city) return;
        try {
            const weatherData = await feactWeaterData(city)
            dishplayWeatherData(weatherData)
        } catch (error) {
            showError()
        }

    })

    async function feactWeaterData(city) {
        //const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${}`
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_key}`
        const responce = await fetch(url);
        if (!responce.ok) {
            throw new Error("somethink went wrong")
        }
        console.log(typeof responce);
        console.log("RESPONCE", responce)
        const data = await responce.json()
        return data
    }

    function dishplayWeatherData(data) {
        console.log(data)
        const { name, main, weather } = data
        cityName.textContent = name;
        temprature.textContent =`Temperature : ${main.temp}`
        description.textContent= `Weather : ${weather[0].description}`
        
        weatherInfo.classList.remove("hidden");
        errorMeassge.classList.add("hidden") 
    }

    function showError() {
        weatherInfo.classList.remove('hidden');
        errorMeassge.classList.remove('hidden');
    }
})


