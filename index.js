import { logWeather } from "./src/log-weather.js";
import { showTimeline } from "./src/components/ui.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("location-form");
  console.log(`fetched form: ${form}`);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const location = "10108"; //debug
    let weatherJSON = await logWeather(location);
    // read the response stream to completion
    let weather = await weatherJSON.json();
    console.log(`weather: ${weather}`);
    showTimeline(weather);
  });
});
