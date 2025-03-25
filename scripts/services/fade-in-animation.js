const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  });
  
  document.querySelectorAll('.process__steps-image, .process__steps-text')
    .forEach((el) => observer.observe(el));
  