import {minerals} from "../data/mineral.mjs";

const mineral= document.querySelector("#rockGallery");
const mineralDetails = document.querySelector(".mineralDetails");

minerals.forEach(element => {
    let rock = document.createElement("p");
    let rockPic = document.createElement("img");
    let learnMore = document.createElement("button");
    let rockCard = document.createElement("div");
    let details = document.createElement("p");
    rockCard.className = "rockCard";
    learnMore.textContent = "Learn More";
    learnMore.className = ("mineralDetailsButton");
    rockPic.src = element.photo;
    rock.textContent=element.name;
    details.textContent = element.description
    details.className = "specificMineral";
    rockCard.appendChild(rock);
    rockCard.appendChild(rockPic);
    rockCard.appendChild(details);
    rockCard.appendChild(learnMore);
    mineral.appendChild(rockCard);

    learnMore.addEventListener("click",() => {
        mineralDetails.showModal();
        let modalName=document.querySelector(".modalName");
        let modalDescription=document.querySelector(".modalDescription");
        modalName.textContent = element.name;
        modalDescription.textContent = element.description;
        mineralDetails.appendChild(modalName);
        mineralDetails.appendChild(modalDescription);
});
    let closeButton = document.querySelector(".closeButton");
    closeButton.addEventListener("click",() => 
    {
        mineralDetails.close();
    })
});



