const icon = document.querySelector(".header__icon");
const nav = document.querySelector(".header__nav");
const menu = document.querySelector(".header__menu");
if(icon) {
    icon.addEventListener('click', () => {
        document.body.classList.toggle('_lock');
        menu.classList.toggle('_active');
        nav.classList.toggle('_active');
        icon.classList.toggle('_active');
    }); 
}