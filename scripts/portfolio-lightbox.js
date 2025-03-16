const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('expandedImg');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');
const lightboxGallery = document.getElementById('portfolio__gallery');

// Open modal and display image when user clicks on image
lightboxGallery.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('portfolio__image')) {
        modal.classList.add('show');
        modalImg.src = e.target.src;
        const description = e.target.parentElement.querySelector('p')?.textContent || '';
        captionText.textContent = description;
    }
});

// Close modal when user clicks on close button
closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});

// Close modal if user clicks outside the image
modal.addEventListener('click', e => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});
