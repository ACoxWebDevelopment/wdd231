const navbutton = document.querySelector('#nav-button');
// toggle the show class on and off
const navbar = document.querySelector('#nav-bar');
navbutton.addEventListener ('click' , () =>
{
    navbutton.classList.toggle('show');
    navbar.classList.toggle('show');
} );