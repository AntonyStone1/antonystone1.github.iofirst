const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('site-navigation');


hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
    
});