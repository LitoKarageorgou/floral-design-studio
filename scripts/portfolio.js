fetch('./portfolio.json')
    .then(response => response.json())
    .then(data => {
        const gallery = document.getElementById('portfolio__gallery');
        data.forEach(item => {
            // Create a new card for each item in the portfolio
            const card = document.createElement('div'); 
            // Add class to the card
            card.classList.add('portfolio__card');
            // Create an image element
            const img = document.createElement('img');
            // Add class to the image
            img.classList.add('portfolio__image');
            // Set the image source and alt text
            img.src = item.image;
            // Set the alt text
            img.alt = item.description;
            // Create a caption element
            const caption = document.createElement('p');
            // Add class to the caption
            caption.textContent = item.description;
            // Append the image and caption to the card
            card.appendChild(img);
            card.appendChild(caption);
            gallery.appendChild(card);
        });
    })
    // Log any errors to the console
    .catch(err => console.error('Error loading portfolio:', err));