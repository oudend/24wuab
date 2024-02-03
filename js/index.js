// const main = document.querySelector("main");
// const header = document.querySelector("header");

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

var ambient = new Ambient({ blur: -1, retainAttributes: true });
ambient.mount();

var lazyLoadInstance = new LazyLoad({
  // Your custom settings go here
});
