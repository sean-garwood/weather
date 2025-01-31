async function getWeather(loc) {
  let weather = await getWeatherTimelineJSON(loc);

  try {
    return weather;
  } catch (error) {
    throw new Error(error);
  }

  async function getWeatherTimelineJSON(location, endpoint = "timeline") {
    console.log(`location len: ${location.length}`);
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
    const unitGroup = location.length === 5 ? "us" : "metric";
    const url = `${Endpoints[endpoint]}/${location}?unitGroup=${unitGroup}&key=${ApiKey}`;
    let response = await fetch(url);

    try {
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export { getWeather };
