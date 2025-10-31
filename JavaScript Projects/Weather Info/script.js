/** @format */

document.addEventListener("DOMContentLoaded", () => {
	const cityName = document.querySelector(".weather_city");
	const searchCity = document.querySelector(".city_name");
	const dateTime = document.querySelector(".weather_date_time");
	const w_forecast = document.querySelector(".weather_forecast");
	const w_icon = document.querySelector(".weather_icon");
	const w_temperature = document.querySelector(".weather_temperature");
	const w_min = document.querySelector(".weather_min");
	const w_max = document.querySelector(".weather_max");
	const w_feelsLike = document.querySelector(".weather_feelsLike");
	const w_humidity = document.querySelector(".weather_humidity");
	const w_wind = document.querySelector(".weather_wind");
	const w_pressure = document.querySelector(".weather_pressure");
	let getCityName;

	//* To get the actual country name
	const getCountryName = (code) => {
		return new Intl.DisplayNames(["en"], { type: "region" }).of(code);
	};

	//* Local Storage Data Get
	let getCity = () => {
		getCityName = JSON.parse(localStorage.getItem("City")) || [
			"Mumbai",
		];
		return getCityName[0].toUpperCase();
	};

	//* to get the date and time
	const getDateTime = (dt) => {
		let currentDate = new Date(dt * 1000);
		const formatter = new Intl.DateTimeFormat("en-US", {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
			hour12: true,
		});
		return formatter.format(currentDate);
	};

	//* search functionality
	const addCityName = (e) => {
		e.preventDefault();
		const cityNameValue = searchCity.value.trim();

		if (getCityName.length >= 1) {
			getCityName.shift();
		}

		//Check Empty Data to Local Storage Other wise Data Store
		if (searchCity.value !== "") {
			getCityName.push(cityNameValue);
			getCityName = [...new Set(getCityName)];
			localStorage.setItem("City", JSON.stringify(getCityName));
			searchCity.value = "";
			getCity();
		}
		getWeatherData();
	};

	//* define the getWeather function here

	const getWeatherData = async () => {
		const weatherUrl = `httpss://api.openweathermap.org/data/2.5/weather?q=${getCity()}&APPID=YourAPIKey`;
		try {
			const res = await fetch(weatherUrl);
			const weatherData = await res.json();
			const { main, name, weather, wind, sys, dt } = weatherData;
			cityName.innerHTML = `${name}, ${getCountryName(
				sys.country
			)}`;

			dateTime.innerHTML = getDateTime(dt);

			w_forecast.innerHTML = `${weather[0].main}`;
			w_icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="weather icon">`;

			w_temperature.innerHTML = `${main.temp}&#176`;
			w_min.innerHTML = `Min: ${main.temp_min.toFixed()}&#176`;
			w_max.innerHTML = `Max: ${main.temp_max.toFixed()}&#176`;

			w_feelsLike.innerHTML = `${main.feels_like}&#176`;
			w_humidity.innerHTML = `${main.humidity}%`;
			w_wind.innerHTML = `${wind.speed} m/s`;
			w_pressure.innerHTML = `${main.pressure} hPa`;
		} catch (error) {
			alert(`SORRY \nCity Name Not Found!`);
			// alert(`SORRY \nLimits is Over for Today`);
			console.log("API Not Respond ", error);
		}
	};

	document.body.addEventListener("load", getWeatherData());
	searchCity.addEventListener("keydown", (e) => {
		if (e.key === "Enter") {
			addCityName(e);
		}
	});
});
