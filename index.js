let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let header = document.getElementById("header");

window.addEventListener("scroll", () => {
  let val = window.scrollY;
  bg.style.top = `${val * 0.5}px`;
  moon.style.left = `${-val * 0.5}px`;
  mountain.style.top = `${-val * 0.15}px`;
  road.style.top = `${val * 0.15}px`;
  header.style.top = `${val}px`;
});
