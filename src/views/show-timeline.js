export function showTimeline(data) {
  const container = document.getElementById("main-container");
  const timelineContainer = document.createElement("div");
  const fmtDate = (rawDate) => {
    const fmtDateTime = new Date(rawDate).toLocaleString();
    const justTheDate = fmtDateTime.split(",")[0];
    return justTheDate;
  };

  timelineContainer.setAttribute("id", "timeline");
  try {
    container.appendChild(timelineContainer);
    for (let day of data) {
      let dayContainer = document.createElement("div");
      dayContainer.setAttribute("class", "day");
      let dayHeader = document.createElement("h2");
      dayHeader.textContent = fmtDate(day.datetime);
      dayContainer.appendChild(dayHeader);
      let daySummary = document.createElement("p");
      daySummary.textContent = day.conditions;
      dayContainer.appendChild(daySummary);
      let dayTemp = document.createElement("p");
      dayTemp.textContent = `${day.tempmax} / ${day.tempmin}°F`;
      dayContainer.appendChild(dayTemp);
      let dayPrecip = document.createElement("p");
      dayPrecip.textContent = `Precipitation: ${day.precip}in`;
      dayContainer.appendChild(dayPrecip);
      timelineContainer.appendChild(dayContainer);
      document.getElementById("footer").style.position = "relative";
    }
  } catch (error) {
    throw new Error(error);
  }
}
