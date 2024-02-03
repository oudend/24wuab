const displays = document.querySelectorAll(".display");

for (const display of displays) {
  console.log(display);
  const displayZoomist = new Zoomist(
    display.querySelector(".zoomist-container-display"),
    {
      maxScale: 2,
      bounds: true,
      draggable: false,
      wheelable: false,
      pinchable: false,
      zoomer: false,
    }
  );

  const zoomObject = { zoom: 1 };

  display.addEventListener("mouseover", (e) => {
    const anima = anime({
      targets: zoomObject,
      zoom: 1.05,
      speed: 1,
      easing: "easeOutElastic",
      update: (anim) => {
        displayZoomist.zoomTo(zoomObject.zoom);
      },
    });
  });
  display.addEventListener("mouseout", (e) => {
    const anima = anime({
      targets: zoomObject,
      zoom: 1,
      speed: 1,
      easing: "easeOutElastic",
      update: (anim) => {
        displayZoomist.zoomTo(zoomObject.zoom);
      },
    });
  });
}
