const businesslisting = document.querySelector("#businesses");
const url = "members.json";
let busData= [];
const viewbutton = document.querySelector(".grid")
viewbutton.addEventListener("click", toggleView);

async function getBusData() {
    const response = await fetch(url);
    const data = await response.json();
    busData = data;


    displayBusinesses(busData);
}


// dynamically create elements, and add them to the web page company name, address etc.
function displayBusinesses(busData) {
    // script for grid view

    if (viewbutton.classList.contains("grid")) {
        busData.forEach(element => {
            const card = document.createElement("section");
            card.className = ("fullGrid")
            const busName = document.createElement("p");
            const busAddress = document.createElement("p");
            const busPhone = document.createElement("p");
            const busURL = document.createElement("p");
            const busImage = document.createElement("img");
            const busLevel = document.createElement("p");
            busName.textContent = element.CompanyName;
            busAddress.textContent = element.CompanyAddress;
            busPhone.textContent = element.CompanyPhone;
            busURL.textContent = element.CompanyURL;
            busLevel.textContent = element.MembershipLevel;
            busImage.setAttribute("src", element.CompanyImage);


            card.appendChild(busName);
            card.appendChild(busAddress);
            card.appendChild(busPhone);
            card.appendChild(busURL);
            card.appendChild(busImage);
            card.appendChild(busLevel);
            businesslisting.appendChild(card);
        });

    }
    // script for list view
    else
        busData.forEach(element => {
            const card = document.createElement("section");
            card.className = ("nameOnly")
            const busName = document.createElement("p");
            busName.textContent = element.CompanyName;
            card.appendChild(busName);
            businesslisting.appendChild(card);
        })


}

function toggleView() {
    businesslisting.innerHTML = "";
    if (viewbutton.classList.contains("grid")) {
        viewbutton.classList.remove("grid");
        viewbutton.classList.add("list");
        viewbutton.textContent = "Grid View";
    } else {
        viewbutton.classList.remove("list");
        viewbutton.classList.add("grid");
        viewbutton.textContent = "List View";
    }

    displayBusinesses(busData);
}

getBusData();
