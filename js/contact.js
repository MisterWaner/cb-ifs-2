//logo link
const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
    window.location.href = '../pages/home.html'
});

//Button menu
const btnMenu = document.querySelector('.btn-menu-toggle');
const menuContainer = document.querySelector('.menu-container');
const items = document.querySelectorAll('.menu-item');

btnMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
  btnMenu.classList.toggle('active');

  const ariaToggle = btnMenu.getAttribute("aria-expanded") === "true" ?  "false" : "true";
  btnMenu.setAttribute("aria-expanded", ariaToggle);

  menuContainer.classList.toggle("open");
}

items.forEach(item => {
    item.addEventListener('click', () => {
        menuContainer.classList.toggle("open");
    });
});
