
let apiKey = "cff83c6639938bbf4f16f04de63c3f59" ;
let apiurl = "https://api.openweathermap.org/data/2.5/weather?q=" ;
let city;
let userCity = document.getElementById("userText");
let temperture = document.getElementById("temp");
let ct = document.getElementById("city");
let humidity = document.getElementById("humi-info");
let windInfo = document.getElementById("wind-info");
let weatherImage = document.querySelector(".weather-img");

async function getweatherData() {
	if (userCity.value=="") 
	{
		alert ("ENTER CITY NAME");
	}
    else
    {
		city = userCity.value;
		let response = await fetch(apiurl + city+`&appid=${apiKey}`);
		let data = await response.json();
		ct.innerHTML = data.name;
		temperture.innerHTML = Math.round(data.main.temp-273.15) + "°C";
        humidity.innerHTML = data.main.humidity + "%";
        windInfo.innerHTML = data.wind.speed + "km/h";
        userCity.value = "";
        if (data.weather[0].main=='Clear') {
        	weatherImage.src = "clear.png";
        }else if (data.weather[0].main=="Fog") {
        	weatherImage.src = "snow.jpeg";
        }else if (data.weather[0].main=="Clouds") {
        	weatherImage.src = "cloudy.png";
        }else if (data.weather[0].main=="Dizzle") {
        	weatherImage.src = "dizzle.png";
        }else if (data.weather[0].main=="Smoke") {
        	weatherImage.src = "mist.png";
        }else if (data.weather[0].main=="Rain") {
        	weatherImage.src = "rainy.jpg";
        }
        console.log(data);

    }
}
