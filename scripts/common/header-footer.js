// Async function to load header and footer
async function loadPartials() {
  try {
    // Load header
    const headerResponse = await fetch('partials/header.html');
    const headerData = await headerResponse.text();
    document.getElementById('header').innerHTML = headerData;
    
    // Load footer
    const footerResponse = await fetch('partials/footer.html');
    const footerData = await footerResponse.text();
    document.getElementById('footer').innerHTML = footerData;
  } catch (error) {
    console.error('Error loading partials:', error);
  }
}

loadPartials();
