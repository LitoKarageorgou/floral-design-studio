window.addEventListener('scroll', function () {
    const btn = document.getElementById('back-to-top');
    if (window.scrollY > 400) {
        btn.classList.remove('hidden');
    } else {
        btn.classList.add('hidden');
    }
});
