// Get all elements with class 'reveal'
const reveals = document.querySelectorAll(".reveal");

// Add/remove 'active' class based on scroll position
const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    reveals.forEach((reveal) => {
        const revealTop = reveal.getBoundingClientRect().top;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add("active");
        } else {
            reveal.classList.remove("active");
        }
    });
};

// Listen for scroll events and trigger reveal function
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();