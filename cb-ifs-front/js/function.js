//LOGO LINK AND BUTTON MENU
const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
    window.location.href = '../pages/home.html'
});

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
        btnMenu.classList.toggle('active');
    });
});

//GO TO TOP BUTTON
const goToTopBtn = $('#btn-to-top');

$(window).scroll(() => {
    if ($(window).scrollTop() > 200) {
        goToTopBtn.addClass('show');
    } else {
        goToTopBtn.removeClass('show');
    }
});

goToTopBtn.on('click', (e) => {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '200');
});