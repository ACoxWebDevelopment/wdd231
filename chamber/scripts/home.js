const businesslisting = document.querySelector("#spotlightBusinesses");
const url = "data/members.json";
let busData= [];
let scopeEligible = [];
let scopeRandomSponsored

async function getBusData() {
    const response = await fetch(url);
    const data = await response.json();
    busData = data;
    
    filterBusinesses();
    chooseRandom();

    displayBusinesses(scopeRandomSponsored);
}
getBusData();

function filterBusinesses()
{
    let eligible = [];
    busData.forEach(element => {

        // Check to see if membership level is gold or silver if so put it in a new array that will be used to randomly select three sponsored businesses
        if (element.MembershipLevel == "Gold" || element.MembershipLevel =="Silver")
        {
            eligible.push (element);
            scopeEligible = eligible;
        }
    
    });
}

function chooseRandom()

//pick 3 eligible businesses
{
    let randomSponsored = [];
    for (i = 0; i<3; i++)
    {
        
        // pick a random array element and add it to the pick array
        let randomBus =  Math.floor(Math.random()*scopeEligible.length);
        randomSponsored.push (scopeEligible[randomBus]);

        // remove picked element from the eligible array
        scopeEligible.splice(randomBus,1);      

    }
    scopeRandomSponsored = randomSponsored
}

function displayBusinesses(randomSponsored)
{
            randomSponsored.forEach(element => {
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

