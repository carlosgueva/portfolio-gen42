const toggleDOM = document.getElementById("language-toggle");
const currentLang = window.location.href.includes("index-en.html");
toggleDOM.checked = currentLang;

function changeLanguage() {
  toggleDOM.addEventListener("change", async () => {
    document.body.style.transition = "opacity 0.3s ease-out";
    document.body.style.opacity = "0";

    await new Promise((resolve) => setTimeout(resolve, 300));

    if (toggleDOM.checked) {
      window.location.href = "index-en.html";
    } else {
      window.location.href = "index.html";
    }
  });
}

export default changeLanguage;
