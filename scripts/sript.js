const icon = document.querySelector(".header__icon");
const nav = document.querySelector(".header__nav");
const menu = document.querySelector(".header__menu");
const player = document.querySelector(".video__player");
const control = document.querySelector(".video__control");
if(icon) {
    icon.addEventListener('click', () => {
        document.body.classList.toggle('_lock');
        menu.classList.toggle('_active');
        nav.classList.toggle('_active');
        icon.classList.toggle('_active');
    }); 
}

if(player) {
    if(control) {
        control.addEventListener('click', () => {
            player.setAttribute('controls', '');
            player.play();
            control.style.display = 'none';
        })
    }
}