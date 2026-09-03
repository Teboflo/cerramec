const slidebar = document.querySelector('.slidebar');
const btnOpen = document.querySelector('.menu-boton');

btnOpen.addEventListener('click', (e) => {
    e.stopPropagation();
    slidebar.style.display = 'flex';
});

slidebar.addEventListener('click', (e) => {
    e.stopPropagation();
});

window.addEventListener('click', () => {
    if (slidebar.style.display === 'flex') {
        slidebar.style.display = 'none';
    }
});