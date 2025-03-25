const boxes = document.querySelectorAll('.contact-info__box');

const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

boxes.forEach(box => {
    observer.observe(box);
});
