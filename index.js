const radioEl = document.getElementsByClassName('pin');
console.log(radioEl[0])
const slides = document.getElementsByClassName('carousel-item');
const totalCarouselItem = slides.length;
let carouselCounter = 0;
const prevBtnEl = document.getElementById("prev-btn");
const nextBtnEl = document.getElementById("next-btn");

nextBtnEl.addEventListener('click', function() {
    render();
    if(carouselCounter == totalCarouselItem - 1) {
        carouselCounter = 0;
    } else {
        carouselCounter++;
    }    
    
    slides[carouselCounter].classList.add("carousel-visible");
    radioEl[carouselCounter].checked = true;
})

prevBtnEl.addEventListener('click', function() {
    render();
    if(carouselCounter == 0) {
        carouselCounter = totalCarouselItem - 1;
    }
    else {
        carouselCounter--;
    }
    slides[carouselCounter].classList.add("carousel-visible");
    radioEl[carouselCounter].checked = true;
})

function render() {
    let i = 0;
    for(let slide of slides) {
        slide.classList.remove("carousel-visible");
        slide.classList.add("carousel-invisible");
        radioEl[i].checked = false;
    }
}
