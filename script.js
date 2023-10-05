const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  nav.classList.toggle("sticky", window.scrollY > 24);
});
