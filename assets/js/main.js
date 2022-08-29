

//
// Dark/Light Mode Switch
//
const colourSwitch = document.querySelector("#colour-switch");
const body = document.querySelector("body");

function checkTheme() {
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
  }
}

function changeColourMode() {
  // Remove style tag in head, see index.html
  const styleTag = document.head.querySelector("style");
  if (styleTag) {
    styleTag.remove();
  }

  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  }
}

colourSwitch.addEventListener("click", changeColourMode);

checkTheme();
