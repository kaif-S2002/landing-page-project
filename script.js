const nav = document.querySelector(".nav");
const menuBtn = document.querySelector(".menu-btn");
const open = document.getElementById("hamb");
const close = document.getElementById("cross");
const menu = document.querySelector(".list");

window.addEventListener("scroll", () => {
  nav.classList.toggle("sticky", window.scrollY > 24);
});

menuBtn.addEventListener("click", () => {
  if (open.style.display == "flex") {
    open.style.display = "none";
    close.style.display = "flex";
    menu.style.display = "flex";
  } else {
    open.style.display = "flex";
    close.style.display = "none";
    menu.style.display = "none";
  }
});
