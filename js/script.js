//SELECT ELEMENETS FROM DOM
const hamburger = document.getElementById('hamburger'),
navUL = document.querySelector('.navUL');
// body = document.querySelector('body');

hamburger.addEventListener('click', ()=>{
    navUL.classList.toggle('show');
});