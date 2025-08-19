function darkmode() {
  const darkmodeToggle = document.getElementById("darkmode-toggle");
  if (!darkmodeToggle) return;

  const savedDarkMode = localStorage.getItem("darkMode");
  if (savedDarkMode !== null) {
    const isDarkMode = savedDarkMode === "true";
    darkmodeToggle.checked = isDarkMode;
  }

  darkmodeToggle.addEventListener("change", () => {
    const isDarkMode = darkmodeToggle.checked;
    localStorage.setItem("darkMode", isDarkMode);
  });
}

export default darkmode;
