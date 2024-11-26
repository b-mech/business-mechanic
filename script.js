const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('header');

// Toggle the 'nav-open' class on the header
hamburger.addEventListener('click', () => {
    header.classList.toggle('nav-open');
});
