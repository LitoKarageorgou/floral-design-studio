document.addEventListener('DOMContentLoaded', function () {
    // Get the button element after the DOM is fully loaded
    const btn = document.getElementById('back-to-top');

    // Function to show or hide the button based on scroll position
    function toggleButton() {
        if (window.scrollY > 400) {
            btn.classList.add('show'); // Show the button
        } else {
            btn.classList.remove('show'); // Hide the button
        }
    }

    // Run toggle function on scroll
    window.addEventListener('scroll', toggleButton);

    // Run once on page load in case user is already scrolled down
    toggleButton();
});
