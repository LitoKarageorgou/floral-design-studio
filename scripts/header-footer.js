fetch('partials/header.html')
  .then(response => {
    return response.text();
  })
  .then(data => {
    document.getElementById('header').innerHTML = data;
  });

  
fetch('partials/footer.html')
  .then(response => {
    return response.text();
  })
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });