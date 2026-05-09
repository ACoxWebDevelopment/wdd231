const copy= document.querySelector("#copyYear");
const mod = document.querySelector("#modified");
const today = new Date();


copy.innerHTML = `\u00A9 ${today.getFullYear()}`; //get current year and place in copy variable
mod.innerHTML = `Last Modified ${document.lastModified}`;


