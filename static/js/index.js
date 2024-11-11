document.addEventListener("DOMContentLoaded", function () {
  const bars = document.querySelectorAll(".progress-bar");
  bars.forEach((bar) => {
    const level = bar.getAttribute("data-level");
    bar.style.width = level;
  });
});

//funcion transicion hero
window.addEventListener("load", function () {
  const header = document.querySelector(".hero");
  header.style.opacity = 1;
  header.style.transform = "translateY(1)";
});
