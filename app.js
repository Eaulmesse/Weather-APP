const ville = document.getElementById('ville');
const temperature = document.getElementById('temperature');
const desc = document.getElementById('description');
const humidité = document.getElementById('humidité');
const windSpeed = document.getElementById('wind-speed');

let meteo ;

async function fetchWeather() {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=45.82476337622192&lon=4.9548813227527795&appid=4260db690a0ebffac51a405b02d49ab8")
.then((response) => response.json())
.then(response => {
    ville.textContent = response.name;
    temperature.textContent = response.main.temp;
    desc.innerHTML = response.weather[0].description;
    humidité.textContent = response.main.humidity;
    windSpeed.textContent = response.wind.speed;
})

}


document.addEventListener('DOMContentLoaded',function(){
fetchWeather();



})