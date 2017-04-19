'use strict';

let nav = document.querySelector('.content-wrapper.nav-wrapper');
let navWide = document.querySelector('.content-wrapper.nav-wrapper.nav_wide');
let header = document.querySelector('.header');

document.addEventListener('scroll', () => {
    let scrolled = window.pageYOffset;
    if (scrolled > header.clientHeight - navWide.clientHeight) {
        nav.classList.remove('nav_wide');
        nav.classList.add('nav_narrow');
    } else {
        nav.classList.remove('nav_narrow');
        nav.classList.add('nav_wide');
    }
});
