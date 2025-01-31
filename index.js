import { handleFormSubmit } from "./src/utils/handle-form-submit.js";

const form = document.getElementById("location-form");

form.addEventListener("submit", handleFormSubmit);
