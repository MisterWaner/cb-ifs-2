//Resize header title
window.addEventListener('resize', () => {
    let histoire = document.querySelector('.histoire');
    let infos = document.querySelector('.infos');

    if (window.innerWidth > 767 && window.innerWidth < 1290) {
        histoire.textContent = 'Histoire';
        infos.textContent = 'Infos';
    } else if (window.innerWidth < 767 | window.innerWidth > 1290) {
        histoire.textContent = 'Histoire du club';
        infos.textContent = 'Infos pratiques';
    }
})

