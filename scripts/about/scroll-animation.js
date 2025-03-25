const valuesSection = document.querySelector('.values');
const valueItems = document.querySelectorAll('.values__value');

if (valuesSection) {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                valueItems.forEach(item => item.classList.add('animate'));
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(valuesSection);
}