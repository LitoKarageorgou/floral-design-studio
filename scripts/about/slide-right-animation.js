// Select the section and values
const valuesSection = document.querySelector('.values');
const valueItems = document.querySelectorAll('.values__value');

if (valuesSection) {
    // Create an observer with a 50% visibility threshold
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class to all value items
                valueItems.forEach(item => item.classList.add('animate'));
                // Stop observing after triggering the animation
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // Start observing the values section
    observer.observe(valuesSection);
}