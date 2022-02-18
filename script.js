const hamburger = document.querySelector(".nav-burger");
const navMenu = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})
