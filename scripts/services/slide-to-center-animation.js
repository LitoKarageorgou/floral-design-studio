// Create an IntersectionObserver to add animation when elements become visible
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add 'animate' class to the element when it's in view
      entry.target.classList.add('animate');
      // Stop observing the element after animating
      observer.unobserve(entry.target);
    }
  });
});

// Observe all elements with these classes for intersection changes
document.querySelectorAll('.process__steps-image, .process__steps-text')
  .forEach((el) => observer.observe(el));