// let currentCity="Parbhani";
// let units="metric";
// let city = document.querySelector(".weather__city");
// let datetime = document.querySelector(".weather__datetime");
// let weather__forecast = document.querySelector('.weather__forecast');
// let weather__temperature = document.querySelector(".weather__temperature");
// let weather__icon = document.querySelector(".weather__icon");
// let weather__minmax = document.querySelector(".weather__minmax")
// let weather__realfeel = document.querySelector('.weather__realfeel');
// let weather__humidity = document.querySelector('.weather__humidity');
// let weather__wind = document.querySelector('.weather__wind');
// let weather__pressure = document.querySelector('.weather__pressure');

// document.querySelector(".weather__search").addEventListener('submit', e => {
//   let search = document.querySelector(".weather__searchform");
//   // prevent default action
//   e.preventDefault();
//   // change current city
//   currCity = search.value;
//   // get weather forecast 
//   getWeather();
//   // clear form
//   search.value = ""
// })

// // convert country code to name
//  function convertCountryCode(country){
//      let regionNames = new Intl.DisplayNames(["en"], {type: "region"});
//      return regionNames.of(country)}

//      // units
// document.querySelector(".weather_unit_celsius").addEventListener('click', () => {
//   if(units !== "metric"){
//       // change to metric
//       units = "metric"
//       // get weather forecast 
//       getWeather()
//   }
// })

// function convertTimeStamp(timestamp){

//     const date = new Date(timestamp * 1000);
    
//     const options = {
//         weekday: "long",
//         day: "numeric",
//         month: "long",
//         year: "numeric",
//         hour: "numeric",
//         minute: "numeric",
       
//     }
//     return date.toLocaleString("en-US", options)
   
// }

// function getWeather(){
//   const Api_key="c6dbb2e4ff7bea3fe89042272c2ca66d"
//   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${Api_key}&units=${units}`).then(res => res.json()).then(data => {
//     console.log(data)
//     city.innerHTML = `${data.name}, ${convertCountryCode(data.sys.country)}`
//     datetime.innerHTML = convertTimeStamp(data.dt, data.timezone); 
//     weather__forecast.innerHTML = `<p>${data.weather[0].main}`
//     weather__temperature.innerHTML = `${data.main.temp.toFixed()}&#176`
//     weather__icon.innerHTML = `   <img src="http://openweather map.org/img/wn/${data.weather[0].icon}@4x.png" />`
//     weather__minmax.innerHTML = `<p>Min: ${data.main.temp_min.toFixed()}&#176</p><p>Max: ${data.main.temp_max.toFixed()}&#176</p>`
//     weather__realfeel.innerHTML = `${data.main.feels_like.toFixed()}&#176`
//     weather__humidity.innerHTML = `${data.main.humidity}%`
//     weather__wind.innerHTML = `${data.wind.speed} ${units === "imperial" ? "mph": "m/s"}` 
//     weather__pressure.innerHTML = `${data.main.pressure} hPa` 
//   }
//   )
// }
// document.body.addEventListener('load', getWeather())



// state
let currCity = "London";
let units = "metric";

// Selectors
let city = document.querySelector(".weather__city");

let weather__forecast = document.querySelector('.weather__forecast');
let weather__temperature = document.querySelector(".weather__temperature");
let weather__icon = document.querySelector(".weather__icon");
let weather__minmax = document.querySelector(".weather__minmax")
let weather__realfeel = document.querySelector('.weather__realfeel');
let weather__humidity = document.querySelector('.weather__humidity');
let weather__wind = document.querySelector('.weather__wind');
let weather__pressure = document.querySelector('.weather__pressure');

// search
document.querySelector(".weather__search").addEventListener('submit', e => {
    let search = document.querySelector(".weather__searchform");
    // prevent default action
    e.preventDefault();
    // change current city
    currCity = search.value;
    // get weather forecast 
    getWeather();
    // clear form
    search.value = ""
})

// units
document.querySelector(".weather_unit_celsius").addEventListener('click', () => {
    if(units !== "metric"){
        // change to metric
        units = "metric"
        // get weather forecast 
        getWeather()
    }
})

document.querySelector(".weather_unit_farenheit").addEventListener('click', () => {
    if(units !== "imperial"){
        // change to imperial
        units = "imperial"
        // get weather forecast 
        getWeather()
    }
})

// function convertTimeStamp(timestamp, timezone){
//      const convertTimezone = timezone / 3600; // convert seconds to hours 

//     const date = new Date(timestamp * 1000);
    
//     const options = {
//         weekday: "long",
//         day: "numeric",
//         month: "long",
//         year: "numeric",
//         hour: "numeric",
//         minute: "numeric",
//         timeZone: `Etc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(convertTimezone)}`,
//         hour12: true,
//     }
//     return date.toLocaleString("en-US", options)
   
// }
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    timeEl.innerHTML = (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes)+ ' ' + `<span id="am-pm">${ampm}</span>`

    dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]

}, 1000);

// convert country code to name
function convertCountryCode(country){
    let regionNames = new Intl.DisplayNames(["en"], {type: "region"});
    return regionNames.of(country)
}

function getWeather(){
    const API_KEY = '64f60853740a1ee3ba20d0fb595c97d5'

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=${API_KEY}&units=${units}`).then(res => res.json()).then(data => {
    console.log(data)
    city.innerHTML = `${data.name}, ${convertCountryCode(data.sys.country)}`
    weather__forecast.innerHTML = `<p>${data.weather[0].main}`
    weather__temperature.innerHTML = `${data.main.temp.toFixed()}&#176`
    weather__icon.innerHTML = `   <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" />`
    weather__minmax.innerHTML = `<p>Min: ${data.main.temp_min.toFixed()}&#176</p><p>Max: ${data.main.temp_max.toFixed()}&#176</p>`
    weather__realfeel.innerHTML = `${data.main.feels_like.toFixed()}&#176`
    weather__humidity.innerHTML = `${data.main.humidity}%`
    weather__wind.innerHTML = `${data.wind.speed} ${units === "imperial" ? "mph": "m/s"}` 
    weather__pressure.innerHTML = `${data.main.pressure} hPa`
})
}

document.body.addEventListener('load', getWeather())