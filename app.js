const ville = document.getElementById('ville');
const temperature = document.getElementById('temperature');
const desc = document.getElementById('description');
const humidité = document.getElementById('humidité');
const windSpeed = document.getElementById('wind-speed');

let meteo ;



async function fetchWeather() {
    fetch(`api.openweathermap.org/data/2.5/forecast?q=${city.value}&appid=4260db690a0ebffac51a405b02d49ab8`)
.then((response) => response.json())
.then(response => {
    
})}


document.addEventListener('DOMContentLoaded',function(){
fetchWeather();



})