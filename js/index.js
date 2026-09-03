const track = document.querySelector('.slide-track');
const slides = document.querySelectorAll('.slide');
const leftBtn = document.querySelector('#leftBtn');
const rightBtn = document.querySelector('#rightBtn');

let currentIndex = 0;
const totalSlides = slides.length;

function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * (100 / totalSlides)}%)`;
}

rightBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
});

leftBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
});