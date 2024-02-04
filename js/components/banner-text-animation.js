let header = document.querySelector("#banner-text-container > h1");
console.log(header);
header.innerHTML = header.textContent.replace(
  /\S/g,
  "<span class='letter' style='display: inline-block'>$&</span>"
);

let timeline = anime.timeline({
  loop: false,
  autoplay: true,
});

timeline.add({
  targets: "#banner-text-container > h1 .letter",
  scale: [1, 1.5, 1],
  textShadow: [
    "0px 0px 0px black",
    "12px 12px 13px black",
    "0px 0px 0px black",
  ],
  filter: ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(0deg)"],
  easing: "easeOutExpo",
  duration: 1000,
  delay: (el, i) => 50 * i + 250,
  endDelay: 500,
});
