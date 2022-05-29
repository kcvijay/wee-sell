const menuOpen = document.querySelector(".class-menu-icon");
const menuClose = document.querySelector(".close-icon");
const menu = document.querySelector(".nav-toggle-menu");
const menuHeader = document.querySelector(".nav-menu-header");

menuOpen.addEventListener("click", () => {
  menu.classList.remove("hide");
});

menuClose.addEventListener("click", () => {
  menu.classList.add("hide");
});
