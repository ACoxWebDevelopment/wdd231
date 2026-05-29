import { temples } from "../data/temples.js";


import { url } from "../data/temples.js";

const showhere = document.querySelector("#showHere");
const myDialog = document.querySelector("#myDialog");
const myTitle = document.querySelector("#myDialog h2");
const myClose = document.querySelector("#myDialog button");
const myInfo = document.querySelector("#myDialog p")

myClose.addEventListener("click", ()=>
{
    myDialog.close();
}
);

function displayItems(data)
{
    data.forEach(element => {
        console.log(element);
        const photo = document.createElement("img");
        photo.src = `${url}${element.path}`;
        photo.alt = `${element.name}`
        photo.addEventListener("click", () => showStuff(element));
        showhere.appendChild(photo);
    });
}

displayItems(temples);

function showStuff(element)
{
    myTitle.innerHTML = element.name;
    myInfo.innerHTML = `The ${element.name} temple was temple # ${element.number} to be dedicated.  It was dedicated by ${element.person} in ${element.dedicated}`;
    myDialog.showModal();
}