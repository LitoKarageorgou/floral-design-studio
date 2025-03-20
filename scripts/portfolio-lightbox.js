const lightbox = document.getElementById('imageLightbox');
const lightboxImg = document.getElementById('expandedImg');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.lightbox__close');
const lightboxGallery = document.getElementById('portfolio__gallery');

// Open lightbox and display image when user clicks on image
lightboxGallery.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('portfolio__image')) {
        lightbox.classList.add('show');
        lightboxImg.src = e.target.src;
        const description = e.target.parentElement.querySelector('p')?.textContent || '';
        captionText.textContent = description;
    }
});

// Close lightbox when user clicks on close button
closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('show');
});

// Close lightbox if user clicks outside the image
lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
        lightbox.classList.remove('show');
    }
});
