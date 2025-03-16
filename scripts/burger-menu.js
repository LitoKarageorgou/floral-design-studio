document.addEventListener("DOMContentLoaded", () => {
  const burgerToggle = document.querySelector("#burger-menu-toggle");
  const mobileMenu = document.querySelector("#mobile-menu");

  burgerToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    burgerToggle.classList.toggle("active");
  });
});
