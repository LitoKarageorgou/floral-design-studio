const reveals = document.querySelectorAll(".reveal");

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

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); 