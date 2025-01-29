import "./dotenv/config";
import { logWeather } from "./src/log-weather.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("location-form");
  console.log(`fetched form: ${form}`);
  let location;

  form.addEventListener("submit", (event) => {
    console.log("submitting form...");
    event.preventDefault();
    location = document.querySelector("[data-location=location]");
    logWeather(location);
    form.clear();
  });
});
