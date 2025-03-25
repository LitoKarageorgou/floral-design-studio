// Wait for the window to load
window.addEventListener('load', () => {
  // Get the toggle and menu elements
  const burgerToggle = document.querySelector("#burger-menu-toggle");
  const respoMenu = document.querySelector("#responsive-menu");

  // Log an error if elements are missing
  if (!burgerToggle || !respoMenu) {
    console.error("Burger menu toggle or responsive menu element not found.");
    return;
  }

  // Toggle menu visibility and active state on click
  burgerToggle.addEventListener("click", () => {
    respoMenu.classList.toggle("hidden");
    burgerToggle.classList.toggle("active");
  });
});