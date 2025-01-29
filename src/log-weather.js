import { getWeather } from "./modules/get-weather.js";

async function logWeather(loc) {
  let weather = await getWeather(loc);

  try {
    console.log(weather);
  } catch (error) {
    throw new Error(error);
  }
}

export { logWeather };
