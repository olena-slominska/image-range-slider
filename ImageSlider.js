const slider = document.getElementById("slider");
const fgImg = document.querySelector(".foreground-img");
// const container = document.querySelector('.container');
slider.value = 50;
slider.addEventListener("change", (e) => {
  slyderValue = 
  fgImg.style.width = `${e.target.value}%`;
});
