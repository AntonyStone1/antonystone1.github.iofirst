'use strict'
const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('site-navigation');
const achors = document.querySelectorAll('a[href*="#"]');
const scrollUp = document.querySelector('.scroll-up');
const scrollUpActive = document.querySelector('.scroll-up--active');
const serviceItems = document.querySelectorAll('.service-item');
const serviceExample = document.querySelectorAll('.service-example');
const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

// humburger menu
hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
    document.querySelector('.hero-desc').classList.toggle('visually-hidden')
    document.querySelector('.hero-desc').classList.toggle('zIndex')
    document.querySelector('.hero').addEventListener('click', ()  => {
        if (navUL.classList.contains('show')) {
            navUL.classList.remove('show');
            document.querySelector('.hero-desc').classList.toggle('zIndex')
        }
    })   
});

// Hero slider
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    let dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// all achors scroll
for (let achor of achors) {
achor.addEventListener('click', function (e) {
    e.preventDefault();
    const blockId = achor.getAttribute('href');
    document.querySelector('' + blockId).scrollIntoView({
        behavior: 'smooth',
    })
})
}

// scroll to top
window.addEventListener('scroll', () => {
    (getTop() > 100) ? scrollUp.classList.add('scroll-up--active') : scrollUp.classList.remove('scroll-up--active');
    }
)


//service items changer beta
    
function toggleServiceList() {
    for (let i = 0; i < serviceItems.length; i++) {
        serviceItems[i].addEventListener('click', () => {
            if (serviceItems[i].classList.value.split(' ')[1] !== 'service-item--active') {
                serviceItems[i].classList.add('service-item--active')
                serviceExample[i].classList.remove('service-example--hidden')
                for (let j = 0; j < serviceItems.length; j++) {
                    serviceItems[j].classList.remove('service-item--active')
                    serviceItems[i].classList.add('service-item--active');
                    serviceExample[j].classList.add('service-example--hidden')
                    serviceExample[i].classList.remove('service-example--hidden')
            }                
            }
        })
    }    
}

toggleServiceList();
