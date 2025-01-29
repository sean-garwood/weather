import { Endpoints } from "../constants/endpoints.js";
import { ApiKey } from "../constants/api_key.js";

async function getWeatherTimelineJSON(endpoint = "timeline", loc) {
  const url = `${Endpoints[endpoint]}/${loc}?unitGroup=metric&key=${ApiKey}`;
  let response = await fetch(url);

  try {
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
}

export { getWeatherTimelineJSON as getWeather };
