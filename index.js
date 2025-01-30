import { logWeather } from "./src/log-weather.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("location-form");
  console.log(`fetched form: ${form}`);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const container = document.getElementById("main-container");
    const location = "10108"; //debug
    let weatherJSON = await logWeather(location);

    weatherJSON
      .then((data) => {
        console.log(data);
        const timeline = document
          .createElement("div")
          .setAttribute("id", "timeline");
        container.appendChild(timeline);
        timeline.innerHTML = data;
      })
      .finally(() => {
        form.clear();
      });
  });
});
