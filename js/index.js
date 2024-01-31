const main = document.querySelector("main");
const header = document.querySelector("header");
const navbar = document.querySelector("nav");
const banner = document.getElementById("banner-image");
const navReplacer = document.getElementById("navReplacer");

const zoomist = new Zoomist(".zoomist-container-banner", {
  maxScale: 1.5,
  bounds: true,
  draggable: false,
  wheelable: false,
  pinchable: false,
  zoomer: false,
});
// header.style.position = "fixed";
const yOffset = window.pageYOffset || document.documentElement.scrollTop;
const offset = yOffset / 600;
zoomist.zoomTo(offset + 1);

var animating = false;
var fixed = false;

window.addEventListener("scroll", onScroll);

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

function onScroll(e) {
  const yOffset = window.pageYOffset || document.documentElement.scrollTop;
  const offset = yOffset / 600;
  zoomist.zoomTo(offset + 1);

  banner.style.filter = `blur(${offset * 20}px)`;
  zoomist.moveTo({ x: 0, y: yOffset / 500 });

  if (yOffset > 70) {
    fixed = true;
    navbar.classList.add("locked");
    navReplacer.style.paddingTop = "50px";
  } else if (yOffset <= 25) {
    fixed = false;
    navbar.classList.remove("locked");
    navReplacer.style.paddingTop = "0px";
    navbar.style.position = "initial";
  }
}

var ambient = new Ambient({ blur: -1, retainAttributes: true });
ambient.mount();

const displays = document.querySelectorAll(".zoomist-container-display");

for (const display of displays) {
  console.log(display);
  const displayZoomist = new Zoomist(display, {
    maxScale: 2,
    bounds: true,
    draggable: true,
    wheelable: false,
    pinchable: false,
    zoomer: true,
  });
}

var lazyLoadInstance = new LazyLoad({
  // Your custom settings go here
});
