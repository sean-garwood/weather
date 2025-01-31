import { getWeather } from "../components/get-weather.js";
import { showTimeline } from "../views/show-timeline.js";

export async function handleFormSubmit(event) {
  event.preventDefault();

  const inputs = event.target.elements;
  const location = inputs["location"].value;
  let weather = await getWeather(location).then((response) => {
    return response.json();
  });

  showTimeline(weather.days);
}
