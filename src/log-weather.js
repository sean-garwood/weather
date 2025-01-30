async function logWeather(loc) {
  let weather = await getWeatherTimelineJSON(loc);

  try {
    console.log(weather);
  } catch (error) {
    throw new Error(error);
  }

  async function getWeatherTimelineJSON(location, endpoint = "timeline") {
    const ApiKey = "28U3HNWVH7C555KMEE233PU3U";
    const URLS = {
      Base: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services",
      paths: {
        timeline: "/timeline",
        // TODO if i feel like it
        // forecast: "/forecast",
        // history: "/history",
        // historysummary: "/historysummary",
      },
    };

    const Endpoints = {
      timeline: `${URLS.Base + URLS.paths.timeline}`,
    };
    const url = `${Endpoints[endpoint]}/${location}?unitGroup=metric&key=${ApiKey}`;
    let response = await fetch(url);

    try {
      return response.json();
    } catch (error) {
      throw new Error(error);
    }
  }
}

export { logWeather };
