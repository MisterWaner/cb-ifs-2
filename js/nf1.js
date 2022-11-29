//Sroll animation
const sections = [...document.querySelectorAll('.container')];
const items = [...document.querySelectorAll('.menu-item')];
const mainContainer = document.querySelector('.main-container');

window.addEventListener("load", () => {
    let data = sections.map(section => section.offsetTop);
    console.log(data);
  
    // Resize Observer
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(mainContainer);
  
    let firstLoad = true;
    function handleResize() {
      if (!firstLoad) {
        data = sections.map(section => section.offsetTop);
        firstLoad = false;
      }
    }
  
    // Intersection Observer
    const intersectionObserver = new IntersectionObserver(startWatching, {rootMargin: "10% 0px"}) ;
    intersectionObserver.observe(mainContainer);
  
    function startWatching(entries) {
        if(entries[0].isIntersecting) {
            window.addEventListener("scroll", handleScroll)
        } else if (!entries[0].isIntersecting) {
            const elToClean = items.find(item => item.className.includes("marked"))
            if(elToClean) elToClean.classList.remove("marked")
            savedIndex = undefined;
            window.removeEventListener('scroll', handleScroll)
        }
    }
  
    items.forEach((item, index) => {
        item.addEventListener("click", e => {
            e.preventDefault()
  
            window.scrollTo({
            top: data[index],
            behavior: "smooth"
        })
      })
    })
  
  
    // window.addEventListener("scroll", handleScroll)
  
    let savedIndex;
    function handleScroll(){
  
        const trigger = window.scrollY + (window.innerHeight/2);
  
        for(const i of data) {
            const index = data.indexOf(i);
  
            if(trigger >= data[index] && trigger < data[index +1]){
                if(index !== savedIndex) {
                    savedIndex = index;
                    addClassAndClear(index)
                };
                break;
            };
  
            if(index === data.length - 1 && trigger >= data[index]) {
                if(index !== savedIndex) {
                savedIndex = index;
                addClassAndClear(index);
                }
            };
        };
    };
    handleScroll();
  
    function addClassAndClear(index) {
        const elToClean = items.find(item => item.className.includes("marked"));
        if(elToClean) elToClean.classList.remove("marked");
        items[index].classList.add("marked");
    };
});

