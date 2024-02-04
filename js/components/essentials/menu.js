const menuButton = document.getElementById("menu-button");
const menuPopup = document.getElementById("menu-popup");
const menuExit = document.getElementById("menu-exit-button");

console.log(menuButton);

menuButton.addEventListener("click", () => {
  menuPopup.classList.add("menu-visible");
});

menuExit.addEventListener("click", () => {
  menuPopup.classList.remove("menu-visible");
});
