let toggleDiv = document.querySelector(".toggle-btn");
let toggleBtn = document.querySelector(".circle");
let progress = document.querySelectorAll(".progress");
let progressImg = document.querySelectorAll(".progress img");

progress.forEach((item, index) => {
  if (progressImg[index].src.includes("down")) {
    progress[index].style.color = "var(--Bright-Red)";
  }
});

toggleDiv.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  toggleDiv.classList.toggle("toggle");
});
