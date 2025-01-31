export function showTimeline(data) {
  const container = document.getElementById("main-container");
  const timelineContainer = document.createElement("div");

  timelineContainer.setAttribute("id", "timeline");
  try {
    container.appendChild(timelineContainer);
    timelineContainer.innerHTML = data;
  } catch (error) {
    throw new Error(error);
  }
}
