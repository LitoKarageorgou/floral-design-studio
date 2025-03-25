// Select all elements with the class 'contact-info__box'
const boxes = document.querySelectorAll('.contact-info__box');

// Define observer options with a threshold of 50% visibility
const observerOptions = {
    threshold: 0.5 
};

// Create an IntersectionObserver instance with a callback function
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // If the element is visible in the viewport
        if (entry.isIntersecting) {
            // Add the 'animate' class to trigger CSS animations
            entry.target.classList.add('animate');
            // Stop observing this element as it's already animated
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Start observing each box element
boxes.forEach(box => {
    observer.observe(box);
});