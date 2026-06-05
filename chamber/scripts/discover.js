import { places } from "../data/Discover.mjs";
const card = document.querySelector(".card");
places.forEach(element => {

    let cardDetail = document.createElement ("div");
    let figure = document.createElement("figure"); 
    let photo = document.createElement("img");
    let title = document.createElement("h2");
    let address = document.createElement("address");
    let description = document.createElement("p");
    let learnMore = document.createElement("button");

    cardDetail.className = ("placeCard");
    title.textContent = element.title;
    photo.src = element.image;
    address.textContent = element.address;
    description.textContent = element.description;
    learnMore.textContent = "learn more";
    figure.appendChild(photo);
    cardDetail.appendChild(title);
    cardDetail.appendChild(figure);
    cardDetail.appendChild(description);
    cardDetail.appendChild(address);
    cardDetail.appendChild(learnMore); 
    card.appendChild(cardDetail); 
});

