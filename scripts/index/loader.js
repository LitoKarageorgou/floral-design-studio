window.addEventListener('load', () => {
  // Hide loader and show content after 2 seconds
  setTimeout(() => {
    const loader = document.getElementById('loader');
    const container = document.getElementById('container');

    if (loader) {
      loader.style.display = 'none';
    } else {
      console.warn('Loader element not found');
    }

    if (container) {
      container.classList.remove('hidden');
    } else {
      console.warn('Container element not found');
    }
  }, 2000);
});