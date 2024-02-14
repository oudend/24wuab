const navbar = document.querySelector("nav");
const navReplacer = document.getElementById("navReplacer");

const themeButtons = document.querySelectorAll(".theme-button");

var theme = "light";

for (const themeButton of themeButtons) {
  if (localStorage.getItem("theme") === "dark") {
    themeButton.classList.toggle("light");
    theme = "dark";
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );
  }

  themeButton.addEventListener("click", () => {
    themeButton.classList.toggle("light");

    theme = theme === "light" ? "dark" : "light";

    localStorage.setItem("theme", theme);

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
