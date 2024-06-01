function submitCityName(event) {
  event.preventDefault();
  let searchFormInput = document.querySelector("#search-form-input");
  let cityNameElement = document.querySelector("#city-name");
  cityNameElement.innerHTML = searchFormInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", submitCityName);
