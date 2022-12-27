// ***** Footer Js to get the time dynamicly*****
// Dynamically getting the time
const newDate = document.querySelector("#date");

newDate.innerHTML = new Date().getFullYear();

// ***** header Js *****
// Getting DOM elements
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
// 1: Click eventlister to add and remove the show-links class if it's not active
navToggle.addEventListener("click", () => {
  if (!links.classList.contains("show-links")) {
    links.classList.add("show-links");
  } else {
    links.classList.remove("show-links");
  }
});

// 2: Removing showlinks class when a link is clicked
links.addEventListener("click", () => {
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  }
});

// Button to go to the top of the page when the user scrolls to the bottom of the page
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > 500) {
    topLink.classList.add("show-button");
  } else {
    topLink.classList.remove("show-button");
  }
});

// ***Dark mode for the website
// 1: Local storage to store the state of the dark mode state (Darkmode functionality)
let darkMode = localStorage.getItem("darkmode");

// 2: getting btn to toggle dark mode
const darkModeBtn = document.querySelector(".dark-mode-btn");

// 3: Check if it's enabled: if it's on turn it off is it's off turn it on
// ***
// Checking the local storage that stored the dark mode state if it's enbaled on pageload
// Keep it enabled if it's not enabled then enable it
// ***
if (darkMode === "enabled") {
  enableDarkMode();
}

// 4: Function to toggle darkmode on
const enableDarkMode = () => {
  // 4.1: Add the class to the body
  document.body.classList.add("darkmode");
  // 4.1: Update darkmode in localstorage
  localStorage.setItem("darkmode", "enabled");
};

// 5: Function to toggle darkmode off
const disableDarkModeOff = () => {
  // 5.1: Add the class to the body
  document.body.classList.remove("darkmode");
  // 5.2: Update darkmode in localstorage
  localStorage.setItem("darkmode", null);
};

// 6: Click eventlister to add the darkmode class if it's not enabled
darkModeBtn.addEventListener("click", () => {
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkModeOff();
  }
});
