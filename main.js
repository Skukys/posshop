import './style.css'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';

// init Swiper:
const bestSlider = new Swiper('.best-swiper', {
    // configure Swiper to use modules
    modules: [Navigation],
    loop: true,
    slidesPerView: 2,
    slidesPerGroupSkip:2,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1121: {
            slidesPerView: 6,
            spaceBetween: 20
        },
        964: {
            slidesPerView: 5,
            spaceBetween: 20
        },
        750: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        500: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
});

const bestSliderAdaptive = new Swiper('.best-swiper-adaptive', {
    // configure Swiper to use modules
    modules: [Navigation],
    loop: true,
    slidesPerView: 2,
    slidesPerGroupSkip:2,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const moreSliderAdaptive = new Swiper('.more-swiper-adaptive', {
    // configure Swiper to use modules
    modules: [Navigation],
    loop: true,
    slidesPerView: 2,
    slidesPerGroupSkip:2,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


// init Swiper:
const moreSlider = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation],
    loop: true,
    navigation: {
        nextEl: '.swiper-more-button-next',
        prevEl: '.swiper-more-button-prev',
    },
});

let modal = document.querySelector('.modal')
let btnModal = document.querySelector('.open-modal')

btnModal.addEventListener('click', () => {
    modal.classList.toggle('active')
    let bg = document.querySelector('.modal-bg')
    bg.addEventListener('click', () => {
        modal.classList.remove('active')
    })

    let exit = document.querySelector('.modal-content__exit')
    exit.addEventListener('click', () => {
        modal.classList.remove('active')
    })
})

let burger = document.querySelector('.header-control__burger')
let burgerNav = document.querySelector('.burger-menu')
let header = document.querySelector('.header')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    let catalogueItems = document.querySelectorAll('.catalogue-item')
    catalogueItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active')
        })
    })

    header.classList.toggle('burger')
    burgerNav.classList.toggle('active')
})
