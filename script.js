let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.Toggle('bx-x')
    navbar.classList.Toggle('active');
    
}