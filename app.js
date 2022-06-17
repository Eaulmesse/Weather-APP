const search = document.getElementById("search");
const btnSearch = document.getElementById("btn-search");
const otherDay = document.querySelector('.other-days');
const card = document.querySelector('.card');


console.log(otherDay)

let url;
btnSearch.addEventListener("click", ()=> {
    url = `https://api.openweathermap.org/data/2.5/forecast?q=${search.value}&appid=4260db690a0ebffac51a405b02d49ab8&units=metric&lang=FR`;
    fetchWeather();
    otherDay.style.display='flex';
    card.style.display='flex';
})




// Aujourd'hui:
const ville = document.getElementById("ville");
const dayoneTemp = document.getElementById("day1-temp");
const dayoneDesc = document.getElementById("day1-desc");
const dayoneHumidity = document.getElementById("day1-humidity");
const dayoneSpeed = document.getElementById("day1-wind");
// JOUR 2
const daytwoName = document.getElementById("day2-name");
const daytwoTemp = document.getElementById("day2-temp");
const daytwoDesc = document.getElementById("day2-desc");
const daytwoHumidity = document.getElementById("day2-humidity");
const daytwoSpeed = document.getElementById("day2-wind");
// JOUR 3 
const daythreeName = document.getElementById("day3-name");
const daythreeTemp = document.getElementById("day3-temp");
const daythreeDesc = document.getElementById("day3-desc");
const daythreeHumidity = document.getElementById("day3-humidity");
const daythreeSpeed = document.getElementById("day3-wind");
// JOUR 4
const dayfourName = document.getElementById("day4-name");
const dayfourTemp = document.getElementById("day4-temp");
const dayfourDesc = document.getElementById("day4-desc");
const dayfourHumidity = document.getElementById("day4-humidity");
const dayfourSpeed = document.getElementById("day4-wind");
// JOUR 5
const dayfiveName = document.getElementById("day5-name");
const dayfiveTemp = document.getElementById("day5-temp");
const dayfiveDesc = document.getElementById("day5-desc");
const dayfiveHumidity = document.getElementById("day5-humidity");
const dayfiveSpeed = document.getElementById("day5-wind");



function fetchWeather() {
    fetch(url)
.then((response) => response.json())
.then(response => {

    console.log(response);

    // AUJOURD'HUI
    ville.textContent = response.city.name;
    let dayOne = response.list[0];
    let dayOneMain = dayOne.main;
    dayoneTemp.textContent = dayOneMain.temp += "°C" ;

    let dayOneWeatherArray = dayOne.weather;
    let dayOneWeather = dayOneWeatherArray[0];
    dayoneDesc.textContent = dayOneWeather.description;

    dayoneHumidity.textContent = dayOneMain.humidity += "%";
    

    let dayOneWind = dayOne.wind;
    dayoneSpeed.textContent = dayOneWind.speed += " KM/H";


    // JOUR 2

    let dayTwo = response.list[8]
    let dayTwoMain = dayTwo.main;
    daytwoTemp.textContent = dayTwoMain.temp += "°C" ;

    daytwoName.textContent = dayTwo.dt_txt;

    
    let dayTwoWeatherArray = dayTwo.weather;
    let dayTwoWeather = dayTwoWeatherArray[0];
    daytwoDesc.textContent = dayTwoWeather.description;

    daytwoHumidity.textContent = dayTwoMain.humidity += "%";

    let daytwoWind = dayTwo.wind;
    daytwoSpeed.textContent = daytwoWind.speed += " KM/H";

    // JOUR 3

    let dayThree = response.list[16]
    let dayThreeMain = dayThree.main;
    daythreeTemp.textContent = dayThreeMain.temp += "°C" ;

    daythreeName.textContent = dayThree.dt_txt;

    
    let dayThreeWeatherArray = dayThree.weather;
    let dayThreeWeather = dayThreeWeatherArray[0];
    daythreeDesc.textContent = dayThreeWeather.description;

    daythreeHumidity.textContent = dayThreeMain.humidity += "%";

    let dayThreeWind = dayThree.wind;
    daythreeSpeed.textContent = dayThreeWind.speed += " KM/H";
    
    // JOUR 4 

    let dayFour = response.list[24]
    let dayFourMain = dayFour.main;
    dayfourTemp.textContent = dayFourMain.temp += "°C" ;

    dayfourName.textContent = dayFour.dt_txt;

    
    let dayFourWeatherArray = dayThree.weather;
    let dayFourWeather = dayFourWeatherArray[0];
    dayfourDesc.textContent = dayFourWeather.description;

    dayfourHumidity.textContent = dayFourMain.humidity += "%";

    let dayFourWind = dayFour.wind;
    dayfourSpeed.textContent = dayFourWind.speed += " KM/H";

    // JOUR 5

    let dayFive = response.list[32]
    let dayFiveMain = dayFive.main;
    dayfiveTemp.textContent = dayFiveMain.temp += "°C" ;

    dayfiveName.textContent = dayFive.dt_txt;

    
    let dayFiveWeatherArray = dayThree.weather;
    let dayFiveWeather = dayFiveWeatherArray[0];
    dayfiveDesc.textContent = dayFiveWeather.description;

    dayfiveHumidity.textContent = dayFiveMain.humidity += "%";

    let dayFiveWind = dayFive.wind;
    dayfiveSpeed.textContent = dayFiveWind.speed += " KM/H";
})}


