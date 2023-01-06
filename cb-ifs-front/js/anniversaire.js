//Resize header title
window.addEventListener('resize', () => {
    let reminder = document.querySelector('.reminder');

    if (window.innerWidth < 767) {
        reminder.textContent = "partagez vos souvenirs";
    } else if (window.innerWidth > 767 && window.innerWidth < 1290 ) {
        reminder.textContent = 'souvenirs';
    } else if (window.innerWidth > 1290) {
        reminder.textContent = "partagez vos souvenirs"
    }
})