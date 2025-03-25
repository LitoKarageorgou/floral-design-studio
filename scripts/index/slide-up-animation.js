// Observer for featured logos
const observerFeatured = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

// Observe each logo header
document.querySelectorAll('.featured__logos h3').forEach(el => {
  observerFeatured.observe(el);
});
