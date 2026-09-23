//
// Dark/Light Mode Switch
//
// The initial theme is set by the inline script in index.html.
//
const root = document.documentElement;
const colourSwitch = document.querySelector("#colour-switch");
const systemDark = matchMedia("(prefers-color-scheme: dark)");

function getSavedTheme() {
  try {
    return localStorage.getItem("theme");
  } catch (e) {
    return null;
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem("theme", theme);
  } catch (e) {
    // Storage unavailable (e.g. private mode): the choice lasts for this page only.
  }
}

function changeColourMode() {
  const theme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = theme;
  saveTheme(theme);
}

// Follow OS changes until the visitor picks a theme themselves.
systemDark.addEventListener("change", (event) => {
  if (!getSavedTheme()) {
    root.dataset.theme = event.matches ? "dark" : "light";
  }
});

colourSwitch.addEventListener("click", changeColourMode);
