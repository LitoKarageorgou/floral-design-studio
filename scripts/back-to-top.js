window.addEventListener('scroll', function () {
    const btn = document.getElementById('back-to-top');
    if (window.scrollY > 500) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
});
