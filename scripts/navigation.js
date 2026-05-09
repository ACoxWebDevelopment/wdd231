// store variables that will be used
const navbutton = document.querySelector("#ham-btn");
const navLinks = document.querySelector("#nav-bar");
const navCurrent = document.querySelector("#current-page");
const wayFind = document.querySelector("#current");

// toggle class on and off


navbutton.addEventListener("click", ()=>{
    navbutton.classList.toggle("show");
    navLinks.classList.toggle("show");
});

// highlight current page for way finding
wayFind.textContent = navCurrent.textContent


