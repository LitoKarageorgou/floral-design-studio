const gallery = document.getElementById('portfolio__gallery');
let portfolioData = [];

// Function to render the gallery
function renderGallery(data) {
    gallery.innerHTML = ''; 
    data.forEach(item => {
        // Create a new card for each item in the portfolio
        const card = document.createElement('div');
        card.classList.add('portfolio__card');
        const img = document.createElement('img');
        img.classList.add('portfolio__image');
        img.src = item.image;
        img.alt = item.alt;
        const caption = document.createElement('p');
        caption.textContent = item.description;
        card.appendChild(img);
        card.appendChild(caption);
        gallery.appendChild(card);
    });
}

// Fetch portfolio data from JSON file
fetch('../data/portfolio.json')
    .then(response => response.json())
    .then(data => {
        portfolioData = data;
        renderGallery(portfolioData);
        document.querySelector('.portfolio__select a[data-filter="all"]').classList.add('active');
    })
    .catch(err => console.error('Error loading portfolio:', err));

// Add event listeners for filtering
document.querySelectorAll('.portfolio__select a').forEach(a => {
    a.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.portfolio__select a').forEach(a => a.classList.remove('active'));
        a.classList.add('active');
        const filter = a.getAttribute('data-filter');
        if (filter === 'all') {
            renderGallery(portfolioData);
        } else {
            const filteredData = portfolioData.filter(item => item.label === filter);
            renderGallery(filteredData);
        }
    });
});