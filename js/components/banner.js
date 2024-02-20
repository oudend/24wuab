const banner = document.getElementById("banner-image");

const zoomist = new Zoomist(".zoomist-container-banner", {
  maxScale: 1.5,
  bounds: true,
  draggable: false,
  wheelable: false,
  pinchable: false,
  zoomer: false,
});

const yOffset = window.pageYOffset || document.documentElement.scrollTop;
const offset = yOffset / 600;
zoomist.zoomTo(offset + 1);

var fixed = false;

window.addEventListener("scroll", onScroll);

function onScroll(e) {
  if (banner.classList.contains("loaded")) {
    banner.style.setProperty("--filter-transition-duration", "0ms");
  }

  const yOffset = window.pageYOffset || document.documentElement.scrollTop;

  if (yOffset > window.innerHeight) return;

  const offset = yOffset / 600;
  zoomist.zoomTo(offset + 1);

  banner.style.filter = `blur(${offset * 20}px)`;
  zoomist.moveTo({ x: 0, y: yOffset / 500 });

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
