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


const iframeScore = [
    {
        id: 1,
        url: "https://scorenco.com/widget/6391b0d91e8a6b6a1a4b16d9/"
    },
    {
        id: 2,
        url: "https://scorenco.com/widget/639b9d1adcdf6c09c65c8263/" 
    },
    {
        id: 3,
        url: "https://scorenco.com/widget/639b9e6ba726b709cb471370/"
    },
    {
        id: 4,
        url: "https://scorenco.com/widget/639ba05091963e09ccc9ff1e/" 
    },
    {
        id: 5,
        url: "https://scorenco.com/widget/639cde104d589e09cb9cfef1/"
    },
    {
        id: 6,
        url: "https://scorenco.com/widget/639cde21794d6376434ffbcc/"
    },
    {
        id: 7,
        url: "https://scorenco.com/widget/639cde384d589e09d21b1a07/"
    },
    {
        id: 8,
        url: "https://scorenco.com/widget/639cde4b6fb3ae09c5ceea65/"
    },
    {
        id: 9,
        url: "https://scorenco.com/widget/639cde794d589e09d1dacbc2/"
    },
    {
        id: 10,
        url: "https://scorenco.com/widget/639cdeae22247909d4a2434c/"
    },
    {
        id: 11,
        url: "https://scorenco.com/widget/639cdedf6fb3ae09c5ceea74/"
    },
    {
        id: 12,
        url: "https://scorenco.com/widget/639cdf264d589e09d1dacbd3/"
    },
    {
        id: 13,
        url: "https://scorenco.com/widget/639cdf4e4d589e09d1dacbd7/"
    },
    {
        id: 14,
        url: "https://scorenco.com/widget/639cdf78ada3356458df7dc0/"
    },
    {
        id: 15,
        url: "https://scorenco.com/widget/639cdf8aada33509d2e91405/"
    },
    {
        id: 16,
        url: "https://scorenco.com/widget/639cdfa26fb3ae09c7cafa50/"
    },
    {
        id: 17,
        url: "https://scorenco.com/widget/639cdfc222247964b21dc67d/"
    },
    {
        id: 18,
        url: "https://scorenco.com/widget/639ce0016fb3ae09c83fdbe0/"
    },
    {
        id: 19,
        url: "https://scorenco.com/widget/639ce0294d589e09d21b1a2e/" 
    },
    {
        id: 20,
        url: "https://scorenco.com/widget/639ce05e6fb3ae09c83fdbe5/"
    },
    {
        id: 21,
        url: "https://scorenco.com/widget/639ce07dada335633faad830/"
    },
    {
        id: 22,
        url: "https://scorenco.com/widget/639ce0a6ada33509d4297252/"
    },
    {
        id: 23,
        url: "https://scorenco.com/widget/639ce0c022247909d4a2437a/"
    },
];


// const getIframeScore = () => {
//     for (let i = 0; i < iframeScore.length; i++) {
//         const data = fetch(iframeScore[i].url)
//             .then((res) => res.json(data))
//     };
// };

// getIframeScore();