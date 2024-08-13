// Constants
const baseUrl = "https://api.weatherapi.com";
const apiKey = "7899daaf05414dfea33153856230910";

// Elements
const temperatureField = document.querySelector(".temp");
const cityField = document.querySelector(".time_location p");
const dateField = document.querySelector(".time_location span");
const emojiField = document.querySelector(".weather_condition img");
const weatherField = document.querySelector(".weather_condition span");
const errorField = document.querySelector(".errorText");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (searchField.value) {
    getWeatherforCity(searchField.value);
  }
});

async function getWeatherforCity(city) {
  try {
    // 1. Call the Weather API
    const response = await fetch(
      `${baseUrl}/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`
    );
    const data = await response.json();

    if (!data.location) {
      throw new Error();
    }

    // 2. Update the DOM based on data
    const { location, current } = data;
    const { name, localtime } = location;
    const {
      temp_c,
      condition: { icon, text },
    } = current;

    temperatureField.innerText = `${temp_c} °C`;
    cityField.innerText = name;
    dateField.innerText = localtime;
    emojiField.src = icon;
    weatherField.innerText = text;

    // Resetting the search field
    searchField.value = "";

    // Reset/Hide Error
    errorField.computedStyleMap.display = "none";
  } catch (err) {
    searchField.value = "";
    errorField.innerText = "Please, enter a valid location";
    errorField.style.display = "block";

    return;
  }
}
