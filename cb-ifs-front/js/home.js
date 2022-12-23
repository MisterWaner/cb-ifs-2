window.addEventListener('resize', () => {
    let title = document.querySelector('.header-title');

    if (window.innerWidth < 900) {
        title.textContent = 'Bienvenue au CB IFS';
    } else if (window.innerWidth > 900) {
        title.textContent = 'Bienvenue sur le site du CB IFS';
    }
})

