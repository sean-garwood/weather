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

export { Endpoints };
