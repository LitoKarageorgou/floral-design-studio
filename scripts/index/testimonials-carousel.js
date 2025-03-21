// Variables
const arrowForward = document.getElementById("arrow-forward");
const arrowBack = document.getElementById("arrow-back");
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");
const dotsContainer = document.querySelector(".testimonials__dots");
let currentSlide = 0;

const testimonials = [
    {
        title: `"Florience transformed our wedding into an absolute dream. The floral arrangements were breathtaking, and every detail was thoughtfully designed to perfection."`,
        text: `"From our very first consultation, the Florience team understood exactly what we wanted. They created arrangements that felt natural yet luxurious, elegant yet effortless. Every floral element, from the bridal bouquet to the reception centerpieces, was crafted with such care and precision."
        
        <br /><br /> <span> <br /> </span>
        
        "Seeing the final setup took my breath away. It was as if they had stepped into my imagination and made it real. I couldn't have asked for a more magical experience!"
        
        <br /><br /><br />
        
        — Olivia Bennett`,
        image1: "../assets/images/index/line.jpg",
        image2: "../assets/images/index/wreath.jpg"
    },
    {
        title: `"Florience brought our vision to life with unmatched elegance. Their florals set the perfect tone for our celebration."`,
        text: `"From the moment we met with Florience, we knew we were in the best hands. The flowers were beyond stunning—soft, romantic, and exactly what we envisioned. The attention to detail and artistry was remarkable, making our special day even more magical.

          <br /><br /> <span> <br /> </span>

          Every bouquet, table piece, and floral installation told a story, bringing warmth and elegance to our venue. Thank you for making our day so unforgettable!"

          <br /><br /><br />

        — James & Eleanor Whitmore`,
        image1: "../assets/images/index/blue-flower-fullsize.jpg",
        image2: "../assets/images/index/bouquet2.jpg"
    },
    {
        title: `"Astonishingly creative floral designs that brought joy to our celebration."`,
        text: `"From our first encounter to the final arrangement, every detail was crafted with passion. The floral displays transformed our event into a vibrant and memorable experience. We were truly impressed by the artistry and vision behind each design.
        
        <br /><br /><br />
        
        — Martin & Sophia Ramirez"`,
        image1: "../assets/images/index/blue-flower-fullsize.jpg",
        image2: "../assets/images/index/wreath.jpg"
    }
];

// Create dots based on testimonials length
testimonials.forEach((testimonial, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === currentSlide) dot.classList.add("active");
    dot.addEventListener("click", () => {
        currentSlide = index;
        showSlide(currentSlide);
        updateDots();
    });
    dotsContainer.appendChild(dot);
});

function updateDots() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
    });
}

function showSlide(index) {
    const testimonial = testimonials[index];
    document.querySelector(".testimonials__text h3").innerHTML = testimonial.title;
    document.querySelector(".testimonials__text p").innerHTML = testimonial.text;
    document.querySelector(".testimonials__image--1").style.backgroundImage = `url(${testimonial.image1})`;
    document.querySelector(".testimonials__image--2").style.backgroundImage = `url(${testimonial.image2})`;
    updateDots();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % testimonials.length;
    showSlide(currentSlide);
}

// Navigation arrows
arrowForward.addEventListener("click", nextSlide);
arrowBack.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
    showSlide(currentSlide);
});

// Initialize slider
showSlide(currentSlide);