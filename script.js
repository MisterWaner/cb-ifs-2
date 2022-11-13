const home = document.querySelector('.home');
const shop = document.querySelector('.shop');
const container = document.querySelector('.container');

home.addEventListener('mouseenter', () => {
    container.classList.add('hover-home');
});
home.addEventListener('mouseleave', () => {
    container.classList.remove('hover-home');
});

shop.addEventListener('mouseenter', () => {
    container.classList.add('hover-shop');
});
shop.addEventListener('mouseleave', () => {
    container.classList.remove('hover-shop');
});


