// Dom Variables

const themeToggle = document.getElementById("toggle");
const pattern = document.querySelector(".pattern");
const primaryTexts = [
  document.querySelector("h1"),
  ...document.querySelectorAll(".followers"),
  ...document.querySelectorAll(".box-data h3"),
];
const secondryTexts = [
  ...document.querySelectorAll(".box-content p"),
  document.querySelector(".overview > h2"),
  ...document.querySelectorAll("a"),
  ...document.querySelectorAll(".box-header h3"),
];
const cards = [
  ...document.querySelectorAll(".box"),
  ...document.querySelectorAll(".overview-box"),
];

// Check which mode when page loads / reloads

if (themeToggle.checked) {
  addDarkMode();
}

// Toggle between light / dark modes

themeToggle.addEventListener("click", () => {
  if (themeToggle.checked) {
    addDarkMode();
  } else {
    removeDarkMode();
  }
});

// Adding Dark Mode Styles

function addDarkMode() {
  document.body.classList.add("page-dm");
  pattern.classList.add("pattern-dm");
  primaryTexts.forEach((primaryText) => {
    primaryText.classList.add("text-primary-dm");
  });
  secondryTexts.forEach((secondryText) => {
    secondryText.classList.add("text-secondry-dm");
  });
  cards.forEach((card) => card.classList.add("card-bg-dm"));
}
// Removing Dark Mode Styles

function removeDarkMode() {
  document.body.classList.remove("page-dm");
  pattern.classList.remove("pattern-dm");
  primaryTexts.forEach((primaryText) => {
    primaryText.classList.remove("text-primary-dm");
  });
  secondryTexts.forEach((secondryText) => {
    secondryText.classList.remove("text-secondry-dm");
  });
  cards.forEach((card) => card.classList.remove("card-bg-dm"));
}
