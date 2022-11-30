const menu = document.querySelector('ul');
const menuItems = document.querySelectorAll('.nav-item');
const burger = document.querySelector('#hamburger');
const menuIcon = document.querySelector('.menuIcon');
const closeIcon = document.querySelector('.closeIcon');

function toggleMenu() {
    if (menu.classList.contains('showMenu')) {
        menu.classList.remove('showMenu');
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
    } else {
        menu.classList.add('showMenu');
        closeIcon.style.display = 'block';
        menuIcon.style.display = 'none';
    }
}

burger.addEventListener('click', toggleMenu);

menuItems.forEach(
    function(menuItem) {
        menuItem.addEventListener('click', toggleMenu);
    }
)