// Variables
const arrowForward = document.getElementById("arrow-forward");
const arrowBack = document.getElementById("arrow-back");
const dotsContainer = document.querySelector(".testimonials__dots");
let currentSlide = 0;

const testimonials = [
    {
        title: `"The flowers were beyond anything we could have imagined—elegant, romantic, and breathtaking. Every detail felt intentional, from the delicate boutonnieres to the stunning floral arch that framed our vows so perfectly."`,
        text: `Sophie & James Carter`
    },
    {
        title: `"Florience completely transformed our venue with their floral artistry. Seeing the arrangements on the day left us speechless. It was everything we had dreamed of—soft, romantic, and effortlessly beautiful."`,
        text: `Olivia Bennett`
    },
    {
        title: `"The moment I saw my bouquet, I knew we had chosen the right florist. Every arrangement felt natural yet refined, with the perfect balance of colors and textures. Our guests couldn’t stop talking about how beautiful everything looked!"`,
        text: `Emily & Daniel Whitmore`
    },
    {
        title: `"Walking into our reception and seeing the floral arrangements took my breath away. The tablescapes, the entrance, the floral runners—it was all beyond perfect. Florience truly made our wedding feel like a dream."`,
        text: ` Charlotte & Henry Lawson`
    },
    {
        title: `"From the very first consultation, I knew Florience understood our vision. The florals set the most romantic and elegant tone for the entire day. The lush arrangements, the candlelit tables—it was pure magic."`,
        text: `Amelia & Thomas Sinclair`
    },
    {
        title: `"Florience created the most stunning floral arrangements, elevating every corner of our venue. The cascading blooms, the soft pastels, the natural movement of each arrangement—it was everything we could have hoped for and more."`,
        text: ` Victoria & Edward Hastings`
    }

];

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

// Initialize slider without autoplay
showSlide(currentSlide);