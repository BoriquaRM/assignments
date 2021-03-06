/*Request API with CITYID*/
let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5308655&units=imperial&APPID=a04e508674b6db51e279599363753e7a';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
	let weatherData = JSON.parse(weatherRequest.responseText);
	console.log(weatherData);

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
}