 
const apiUrl ='https://api.weatherapi.com/v1/current.json?key=578c3349718a4aa9b2d123416242906&q=';

const searchBox = document.querySelector(".search-bar input");
const  searchBtn = document.querySelector(".search-bar button"); 
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
	const response = await fetch(apiUrl + city + '&appid = ${key}');
  	var data = await response.json();
 	console.log(data);

	document.querySelector(".city").innerHTML = data.location.name;
	document.querySelector(".temprature").innerHTML = data.current.temp_c +"°c" ;
	document.querySelector(".humidity").innerHTML = data.current.humidity + "%" ;
	document.querySelector(".wind").innerHTML = data.current.wind_kph + "km/h";

	// fetch data for details overview left 
	document.querySelector(".country").innerHTML = data.location.country;
	document.querySelector(".latitute").innerHTML = data.location.lat;
	document.querySelector(".localtime").innerHTML = data.location.localtime;
	document.querySelector(".localtime_epoch").innerHTML = data.location.localtime_epoch;
	document.querySelector(".longitude").innerHTML = data.location.lon;
	document.querySelector(".name").innerHTML = data.location.name;
	document.querySelector(".region").innerHTML = data.location.region;
	document.querySelector(".tz-id").innerHTML = data.location.tz_id;


	// fetch data for details overview right
	document.querySelector(".text").innerHTML = data.current.condition.text;
	document.querySelector(".heatindex_c").innerHTML = data.current.heatindex_c;
	document.querySelector(".Humidity").innerHTML = data.current.humidity;
	document.querySelector(".is-day").innerHTML = data.current.is_day;
	document.querySelector(".precip-in").innerHTML = data.current.precip_in;
	document.querySelector(".pressure-in").innerHTML = data.current.pressure_in;
	document.querySelector(".wind-degree").innerHTML = data.current.wind_degree;
	document.querySelector(".wind-direction").innerHTML = data.current.wind_dir;
	document.querySelector(".wind-kph").innerHTML = data.current.wind_kph;

// condition for change the weather icon

	if(data.current.condition.text=="Mist"){
		weatherIcon.src ="weatherImages/mist.png";
	}else if(data.current.condition.text=="Sunny"){
		weatherIcon.src ="weatherImages/clear.png";
	}else if(data.current.condition.text=="Partly Cloudy" || "Cloudy"){
		weatherIcon.src ="weatherImages/clear.png";
	}else if(data.current.condition.text=="Blowing snow" ||"Fog"){
		weatherIcon.src ="weatherImages/snow.png";
	}else if(data.current.condition.text=="Light rain"){
		weatherIcon.src ="weatherImages/rain.png";
	}
}
searchBtn.addEventListener("click",()=> {
	checkWeather(searchBox.value);

})
 