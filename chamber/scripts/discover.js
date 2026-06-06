import { places } from "../data/Discover.mjs";
const card = document.querySelector(".card");
const visit = Date.now() ;
// milliseconds in a day 1000ms/sec*60sec/min*60min/hr*24hr/day
const day = 86400000;
const lastVisit = Number(localStorage.getItem("visited"));
let visitMessage = "";

if (lastVisit)
{
    const numDays = (visit - lastVisit) / day;

    if (numDays < 1)
    {
        visitMessage="Back so soon! Awesome!";
    }
    else
    {
        visitMessage=`It has been ${Math.floor(numDays)} days since your last visit`;
    }
}
else
{
    visitMessage="Welcome";
}
document.querySelector("#visitInfo").textContent = visitMessage;

localStorage.setItem("visited", visit);




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
    photo.loading = ("lazy");
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

