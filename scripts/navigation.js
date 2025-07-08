const navbutton = document.querySelector ("#nav-button");
const navmenu = document.querySelector ("#nav-menu");
navbutton.addEventListener("click", () => {navbutton.classList.toggle("show");
    navmenu.classList.toggle("show");
} )

