let button = document.querySelector(".weather_city_button");

button.addEventListener("click", function () {
  let weather_city_value = document.querySelector(".weather_city_value").value;
  // let weather_country_value = document.querySelector(".weather_country_value").value;
  let weather_city = document.querySelector(".weather_city");

  let temperature = document.querySelector(".temperature");
  let disclaimer = document.querySelector(".disclaimer");
  let wind = document.querySelector(".wind");
  let visibility = document.querySelector(".visibility");
  let humidity = document.querySelector(".humidity");
  let images = document.querySelector(".images");
  console.log(weather_city_value);

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${weather_city_value}&appid=ec29d9876ce559e53c99862372246677`
  )
    .then(function (resp) {
      return resp.json();
    }) //convert data to json
    .then(function (data) {
      console.log(data);
      weather_city.innerHTML = data.name;
      images.innerHTML = `<img src ="http://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;

      temperature.innerHTML = Math.round(data.main.temp - 273) + "&deg;";
      disclaimer.textContent = data.weather[0]["description"];
      wind.textContent = "Wind: " + data.wind["speed"] + " м/с";
      visibility.textContent = "Visibility: " + data.visibility / 1000 + " km";
      humidity.textContent = "Humidity: " + data.main["humidity"] + "%";
    })
    .catch(function () {
      //catch any errors
    });
});
