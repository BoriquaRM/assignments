let forecastRequest = new XMLHttpRequest();
let forecastApiURLstring = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=a04e508674b6db51e279599363753e7a';
forecastRequest.open('Get', forecastApiURLstring, true);
forecastRequest.send();

function findDayOfWeek(apiDay) {
	var dayDate = new Date(apiDay);
	var day = dayDate.getDay();
	var dayOfWeek;
	switch (day) {
		case 0:
			dayOfWeek = "Sunday"; break;
		case 1:
			dayOfWeek = "Monday"; break;
		case 2:
			dayOfWeek = "Tuesday"; break;
		case 3:
			dayOfWeek = "Wednesday"; break;
		case 4:
			dayOfWeek = "Thursday"; break;
		case 5:
			dayOfWeek = "Friday"; break;
		case 6:
			dayOfWeek = "Saturday"; break;
		default: break;
	}
	return dayOfWeek;
}

forecastRequest.onload = function () {
	let forecastData = JSON.parse(forecastRequest.responseText);
	console.log(forecastData);

	var imageWeather = "https://openweathermap.org/img/w/";
	var forecastArray = forecastData.list;
	var dayOne, dayTwo, dayThree, dayFour, dayFive;
	var z = 0;

	for (var i = 0; i < forecastArray.length; i++) {
		var x = forecastData.list[i].dt_txt;
		var y = x.includes('18:00:00');
		if (y == true) {
		  switch (z) {
			case 0:
				dayOne = forecastData.list[i];
				break;
			case 1:
				dayTwo = forecastData.list[i];
				break;
			case 2:
				dayThree = forecastData.list[i];
				break;
			case 3:
				dayFour = forecastData.list[i];
				break;
			case 4:
				dayFive = forecastData.list[i];
				break;
			default:
				break;
			}
			z++;
		}
	}
  
/*Request API with CITYID*/
let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=a04e508674b6db51e279599363753e7a';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

/*Current Weather Request*/
weatherRequest.onload = function() {
	let weatherData = JSON.parse(weatherRequest.responseText);
	console.log(weatherData);
	
	/*Name of City*/
		document.getElementById('cc-name').innerHTML = weatherData.name;
	/*Temps*/
		document.getElementById('cc-temp').innerHTML = weatherData.main.temp.toFixed(0);
		document.getElementById('cc-lowtemp').innerHTML = weatherData.main.temp_min.toFixed(0);
		document.getElementById('cc-hightemp').innerHTML = weatherData.main.temp_max.toFixed(0);
	/*Description*/
		document.getElementById('cc-desc').innerHTML = weatherData.weather[0].description;
	/*Weather Icon*/	
		let icon = "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
		let desc = weatherData.weather[0].description;
		document.getElementById('cc-img').setAttribute('src', icon);
		document.getElementById('cc-img').setAttribute('alt', desc);
		document.getElementById('cc-img').setAttribute('title', desc);
	/*Humidity*/
		document.getElementById('cc-humidity').innerHTML = weatherData.main.humidity;
	/*Wind Speed & Wind Chill*/
		document.getElementById('cc-windspeed').innerHTML = weatherData.wind.speed.toFixed(0);
		document.getElementById('cc-windchill').innerHTML = weatherData.wind.deg.toFixed(0);

}
/*MISC Elements*/
		document.getElementById("day-1").innerHTML = findDayOfWeek(dayOne.dt_txt);
		document.getElementById("day-2").innerHTML = findDayOfWeek(dayTwo.dt_txt);
		document.getElementById("day-3").innerHTML = findDayOfWeek(dayThree.dt_txt);
		document.getElementById("day-4").innerHTML = findDayOfWeek(dayFour.dt_txt);
		document.getElementById("day-5").innerHTML = findDayOfWeek(dayFive.dt_txt);
		document.getElementById("low-1").innerHTML = dayOne.main.temp_min.toFixed(0) + "&deg;";
		document.getElementById("low-2").innerHTML = dayTwo.main.temp_min.toFixed(0) + "&deg;";
		document.getElementById("low-3").innerHTML = dayThree.main.temp_min.toFixed(0) + "&deg;";
		document.getElementById("low-4").innerHTML = dayFour.main.temp_min.toFixed(0) + "&deg;";
		document.getElementById("low-5").innerHTML = dayFive.main.temp_min.toFixed(0) + "&deg;";
		document.getElementById("high-1").innerHTML = dayOne.main.temp_max.toFixed(0) + "&deg;F";
		document.getElementById("high-2").innerHTML = dayTwo.main.temp_max.toFixed(0) + "&deg;F";
		document.getElementById("high-3").innerHTML = dayThree.main.temp_max.toFixed(0) + "&deg;F";
		document.getElementById("high-4").innerHTML = dayFour.main.temp_max.toFixed(0) + "&deg;F";
		document.getElementById("high-5").innerHTML = dayFive.main.temp_max.toFixed(0) + "&deg;F";
		document.getElementById("img-1").setAttribute("src", imageWeather + dayOne.weather[0].icon + ".png");
		document.getElementById("img-2").setAttribute("src", imageWeather + dayTwo.weather[0].icon + ".png");
		document.getElementById("img-3").setAttribute("src", imageWeather + dayThree.weather[0].icon + ".png");
		document.getElementById("img-4").setAttribute("src", imageWeather + dayFour.weather[0].icon + ".png");
		document.getElementById("img-5").setAttribute("src", imageWeather + dayFive.weather[0].icon + ".png");
		document.getElementById("img-1").setAttribute("alt", dayOne.weather[0].description);
		document.getElementById("img-2").setAttribute("alt", dayTwo.weather[0].description);
		document.getElementById("img-3").setAttribute("alt", dayThree.weather[0].description);
		document.getElementById("img-4").setAttribute("alt", dayFour.weather[0].description);
		document.getElementById("img-5").setAttribute("alt", dayFive.weather[0].description);
		document.getElementById("img-1").setAttribute("title", dayOne.weather[0].description);
		document.getElementById("img-2").setAttribute("title", dayTwo.weather[0].description);
		document.getElementById("img-3").setAttribute("title", dayThree.weather[0].description);
		document.getElementById("img-4").setAttribute("title", dayFour.weather[0].description);
		document.getElementById("img-5").setAttribute("title", dayFive.weather[0].description);
		document.getElementById("condition-1").innerHTML = dayOne.weather[0].main;
		document.getElementById("condition-2").innerHTML = dayTwo.weather[0].main;
		document.getElementById("condition-3").innerHTML = dayThree.weather[0].main;
		document.getElementById("condition-4").innerHTML = dayFour.weather[0].main;
		document.getElementById("condition-5").innerHTML = dayFive.weather[0].main;
}
