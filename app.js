
const menu = document.querySelector('#menu');
const menuBtn = document.querySelector('#menu-btn');
const menuCloseBtn = document.querySelector('#menu-close-btn');

const closeMenu = () => {
    menu.classList.add('opacity-0');
    menu.classList.add('pointer-events-none');
};

menuBtn.addEventListener('click', () => {
    menu.classList.remove('opacity-0');
    menu.classList.remove('pointer-events-none');
});

menuCloseBtn.addEventListener('click', () => {
    closeMenu();
});