// variables declaration
const dropDown = document.getElementById("country-codes");
const mainForm = document.getElementById("main-form");

// To fetch and display country codes as option values in select tag
const getCountryCodes = async () => {
  const url = "./countryCodes.json";
  const response = await fetch(url);
  const data = await response.json();
  // appending country codes as options inside the dropdown
  dropDown.innerHTML += data.countryCodes.map((obj) => {
    return `<option value = ${obj.dial_code}>${obj.name} (${obj.dial_code})</option>`;
  });
};

// calling the getCountryCodes function on page load
window.addEventListener("load", getCountryCodes);

// To prevent the form submission
mainForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
