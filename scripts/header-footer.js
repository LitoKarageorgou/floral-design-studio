// Fetch header from partials/header.html and insert it into the header element
fetch('partials/header.html')
  .then(response => {
    return response.text();
  })
  .then(data => {
    document.getElementById('header').innerHTML = data;
  });

  
// Fetch footer from partials/footer.html and insert it into the footer element
fetch('partials/footer.html')
  .then(response => {
    return response.text();
  })
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });