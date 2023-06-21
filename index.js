let logo = document.querySelector(".logo");
let logoText = document.querySelector(".logoText");
let tagline = document.querySelector(".tagline");
let birthday = document.querySelector(".birthday");
let underConstruction = document.querySelector(".underConstruction");

setInterval(() => {
  logoText.style.opacity = "1";
  logoText.style.transition = "all 1.3s";
}, 1300);
setInterval(() => {
  tagline.style.opacity = "1";
  tagline.style.transition = "all 1.7s";
}, 1900);
setInterval(() => {
  birthday.style.opacity = "1";
  birthday.style.transition = "all 1.7s";
}, 1900);
setInterval(() => {
  underConstruction.style.opacity = "1";
}, 2400);
