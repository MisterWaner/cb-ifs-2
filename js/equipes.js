const cardBtn = document.querySelector('.show-more');
const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.modal-btn');

const modalAppear =  () => {
    cardBtn.addEventListener('click', () => {
        modal.classList.toggle('active');
    });
}

const modalDisappear = () => {
    modalBtn.addEventListener('click', () => {
        modal.classList.toggle('active');
    });
}

modalAppear();
modalDisappear();