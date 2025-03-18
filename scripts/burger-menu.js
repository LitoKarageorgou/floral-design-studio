window.addEventListener('load', () => {
  const burgerToggle = document.querySelector("#burger-menu-toggle");
  const respoMenu = document.querySelector("#responsive-menu");

  if (!burgerToggle || !respoMenu) {
    console.error("Burger menu toggle or responsive menu element not found.");
    return;
  }

  burgerToggle.addEventListener("click", () => {
    respoMenu.classList.toggle("hidden");
    burgerToggle.classList.toggle("active");
  });
});
