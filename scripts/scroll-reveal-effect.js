const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    reveals.forEach((reveal) => {
        const revealTop = reveal.getBoundingClientRect().top;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add("visible");
        } else {
            reveal.classList.remove("visible");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); 