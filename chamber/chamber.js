const businesslisting = document.querySelector("#businesses");
const url = "members.json";

async function getBusData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);

    displayBusinesses(data);
}


// dynamically create elements, and add them to the web page company name, address etc.
function displayBusinesses(data) {

data.forEach(element => {
    const card = document.createElement("section");
    const busName = document.createElement("p");
    const busAddress = document.createElement("p");
    const busPhone =document.createElement("p");
    const busURL = document.createElement("p");
    const busImage = document.createElement("img");
    const busLevel = document.createElement("p");
    busName.textContent = element.CompanyName;
    busAddress.textContent = element.CompanyAddress;
    busPhone.textContent = element.CompanyPhone;
    busURL.textContent = element.CompanyURL;
    busLevel.textContent = element.MembershipLevel;
    busImage.setAttribute("src", element.CompanyImage) ;


    card.appendChild(busName);
    card.appendChild(busAddress);
    card.appendChild(busPhone);
    card.appendChild(busURL);
    card.appendChild(busImage);
    card.appendChild(busLevel);
    businesslisting.appendChild(card);
});
 
}

getBusData();
