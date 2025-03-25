// Scroll event
window.addEventListener('scroll', function () {
    // Get the button element
    const btn = document.getElementById('back-to-top');
    // Show or hide the button based on scroll position
    if (window.scrollY > 400) {
        btn.classList.remove('hidden');
    } else {
        btn.classList.add('hidden');
    }
});