// Variables
const arrowForward = document.getElementById("arrow-forward");
const arrowBack = document.getElementById("arrow-back");
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");
const dotsContainer = document.querySelector(".testimonials__dots");
let currentSlide = 0;
let autoSlideInterval = setInterval(nextSlide, 5000);

const testimonials = [
    {
        title: `"Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Laudantium iste expedita, quisquam labore vero
          ipsam aspernatur repudiandae voluptatibus."`,
        text: `"Sunt sit ab dolores sed delectus, similique nulla voluptatibus porro molestias
          consequatur iusto error quam dignissimos praesentium.
          exercitationem dolorum libero laborum corrupti est doloremque
          neque perferendis obcaecati quae quia asperiores deleniti
          quis.

          <br /><br /><br />

          Deleniti excepturi amet doloremque officiis qui
          quibusdam, aut totam ipsum, aspernatur ea voluptatum dolorum
          asperiores quia odit numquam.ipsam aspernatur repudiandae voluptatibus, porro molestias consequatur
          iusto
          error quam dignissimos praesentium."

          <br /><br /><br />

          Slide 1`,
        image1: "../assets/images/hero-sections/blue-flower-fullsize.jpg",
        image2: "../assets/images/homepage-portfolio/bouquet2.jpg"
    },
    {
        title: `"Laudantium iste expedita, quisquam labore vero 
        ipsam aspernatur repudiandae voluptatibus. Lorem ipsum dolor, sit amet consectetur adipisicing elit."`,
        text: `"Deleniti excepturi amet doloremque officiis qui
          quibusdam, aut totam ipsum, aspernatur ea voluptatum dolorum
          asperiores quia odit numquam.ipsam aspernatur repudiandae voluptatibus, porro molestias consequatur iusto error quam dignissimos praesentium."

          <br /><br /><br />

          Sunt sit ab dolores sed delectus, similique nulla voluptatibus porro molestias
          consequatur iusto error quam dignissimos praesentium.
          exercitationem dolorum libero laborum corrupti est doloremque
          neque perferendis obcaecati quae quia asperiores deleniti
          quis.

          <br /><br /><br />

          Slide 2`,
        image1: "../assets/images/homepage-portfolio/line.jpg",
        image2: "../assets/images/homepage-portfolio/wreath.jpg"
    }
    // Add more testimonials here
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

// Initial button visibility
playButton.style.display = "none";
pauseButton.style.display = "inline-block";

// Pause autoplay
pauseButton.addEventListener("click", () => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
    pauseButton.style.display = "none";
    playButton.style.display = "inline-block";
});

// Resume autoplay
playButton.addEventListener("click", () => {
    if (!autoSlideInterval) {
        autoSlideInterval = setInterval(nextSlide, 5000);
        playButton.style.display = "none";
        pauseButton.style.display = "inline-block";
    }
});

// Initialize slider
showSlide(currentSlide);