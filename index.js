let textLogo = document.querySelector(".textLogo");
let container = document.querySelector(".container");
let webstorTagline = document.querySelector(".webstorTagline");
let construction = document.querySelector(".construction");

setInterval(() => {
  textLogo.style.opacity = "1";
  textLogo.style.transition = "all 0.8s";
}, 500);

setInterval(() => {
  webstorTagline.style.opacity = "1";
  webstorTagline.style.transition = "all 0.8s";
}, 1000);
setInterval(() => {
  construction.style.opacity = "1";
  construction.style.transition = "all 1s";
  document.body.style.transition = "1s";
}, 2000);
