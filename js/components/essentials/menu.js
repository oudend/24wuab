const menuButton = document.getElementById("menu-button");
const menuPopup = document.getElementById("menu-popup");
const menuExit = document.getElementById("menu-exit-button");

console.log(menuButton);

menuButton.addEventListener("click", () => {
  menuPopup.classList.add("menu-visible");
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";
});

menuExit.addEventListener("click", () => {
  menuPopup.classList.remove("menu-visible");
  document.body.style.overflow = "visible";
  document.documentElement.style.overflow = "visible";
});
