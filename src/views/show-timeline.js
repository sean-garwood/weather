export function showTimeline(data) {
  const container = document.getElementById("main-container");
  const timelineContainer = document.createElement("div");

  timelineContainer.setAttribute("id", "timeline");
  try {
    container.appendChild(timelineContainer);
    for (let day of data) {
      let dayContainer = document.createElement("div");
      dayContainer.setAttribute("class", "day");
      let dayHeader = document.createElement("h2");
      dayHeader.textContent = day.datetime;
      dayContainer.appendChild(dayHeader);
      let daySummary = document.createElement("p");
      daySummary.textContent = day.conditions;
      dayContainer.appendChild(daySummary);
      let dayTemp = document.createElement("p");
      dayTemp.textContent = `Temperature: ${day.tempmax}°C / ${day.tempmin}°C`;
      dayContainer.appendChild(dayTemp);
      let dayPrecip = document.createElement("p");
      dayPrecip.textContent = `Precipitation: ${day.precip}mm`;
      dayContainer.appendChild(dayPrecip);
      timelineContainer.appendChild(dayContainer);
    }
  } catch (error) {
    throw new Error(error);
  }
}
