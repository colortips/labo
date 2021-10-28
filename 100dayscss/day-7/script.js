const search = document.querySelector('.search-box');
const input = document.querySelector('.search-input');

search.addEventListener('click', () => input.classList.toggle("active"));

const icon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const center = document.querySelector('.center');

icon.addEventListener('click', () => {
    menu.classList.toggle("active");
    center.classList.toggle("active")
});