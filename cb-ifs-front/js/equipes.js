//Resizing header title
window.addEventListener('resize', () => {
    let mini = document.querySelector('.mini-basket');

    if (window.innerWidth < 1245) {
        mini.textContent = 'mini-basket';
    } else if (window.innerWidth > 1245) {
        mini.textContent = 'école de mini-basket';
    }
})

//Modals
const openBtns = document.querySelectorAll('.show-more');
const closeBtns = document.querySelectorAll('.close-btn');
const body = document.querySelector('body');
const modals = document.querySelectorAll('.modal');

const openBtn = [...openBtns];
const closeBtn = [...closeBtns];
const modal = [...modals];

const modalArray = [
    {
        open: openBtn[0],
        modal: modal[0],
        close: closeBtn[0]
    },
    {
        open: openBtn[1],
        modal: modal[1],
        close: closeBtn[1]
    },
    {
        open: openBtn[2],
        modal: modal[2],
        close: closeBtn[2]
    },
    {
        open: openBtn[3],
        modal: modal[3],
        close: closeBtn[3]
    },
    {
        open: openBtn[4],
        modal: modal[4],
        close: closeBtn[4]
    },
    {
        open: openBtn[5],
        modal: modal[5],
        close: closeBtn[5]
    },
    {
        open: openBtn[6],
        modal: modal[6],
        close: closeBtn[6]
    },
    {
        open: openBtn[7],
        modal: modal[7],
        close: closeBtn[7]
    },
    {
        open: openBtn[8],
        modal: modal[8],
        close: closeBtn[8]
    },
    {
        open: openBtn[9],
        modal: modal[9],
        close: closeBtn[9]
    },
    {
        open: openBtn[10],
        modal: modal[10],
        close: closeBtn[10]
    },
    {
        open: openBtn[11],
        modal: modal[11],
        close: closeBtn[11]
    },
    {
        open: openBtn[12],
        modal: modal[12],
        close: closeBtn[12]
    },
    {
        open: openBtn[13],
        modal: modal[13],
        close: closeBtn[13]
    },
    {
        open: openBtn[14],
        modal: modal[14],
        close: closeBtn[14]
    },
    {
        open: openBtn[15],
        modal: modal[15],
        close: closeBtn[15]
    },
    {
        open: openBtn[16],
        modal: modal[16],
        close: closeBtn[16]
    },
    {
        open: openBtn[17],
        modal: modal[17],
        close: closeBtn[17]
    },
    {
        open: openBtn[18],
        modal: modal[18],
        close: closeBtn[18]
    },
    {
        open: openBtn[19],
        modal: modal[19],
        close: closeBtn[19]
    },
    {
        open: openBtn[20],
        modal: modal[20],
        close: closeBtn[20]
    },
    {
        open: openBtn[21],
        modal: modal[21],
        close: closeBtn[21]
    },
    {
        open: openBtn[22],
        modal: modal[22],
        close: closeBtn[22]
    },
    {
        open: openBtn[23],
        modal: modal[23],
        close: closeBtn[23]
    }
];

const openModal = () => {
    for (let i = 0; i < modalArray.length; i++) {
        modalArray[i].open.addEventListener('click', () => {
            modalArray[i].modal.classList.toggle('active');
            body.style.overflow = 'hidden';
        });
    };
};
  
const closeModal = () => {
    for (let i = 0; i < modalArray.length; i++) {
        modalArray[i].close.addEventListener('click', () => {
            modalArray[i].modal.classList.toggle('active');
            body.style.overflow = 'auto';
        });
    }
}

openModal();
closeModal();
