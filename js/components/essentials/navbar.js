const navbar = document.querySelector("nav");
const navReplacer = document.getElementById("navReplacer");

const themeButtons = document.querySelectorAll(".theme-button");

var theme = "light";

for (const themeButton of themeButtons) {
  themeButton.addEventListener("click", () => {
    themeButton.classList.toggle("light");

    theme = theme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", theme);
  });
}

var fixed = false;

window.addEventListener("scroll", onScroll);

function onScroll(e) {
  const yOffset = window.pageYOffset || document.documentElement.scrollTop;

  if (yOffset > window.innerHeight) return;

  if (yOffset > navbar.offsetHeight + 20) {
    fixed = true;
    navbar.classList.add("locked");
    navReplacer.style.paddingTop = "50px";
  } else if (yOffset <= navbar.offsetHeight / 2) {
    fixed = false;
    navbar.classList.remove("locked");
    navReplacer.style.paddingTop = "0px";
    navbar.style.position = "initial";
  }
}
