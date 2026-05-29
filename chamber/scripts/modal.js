const npButton = document.querySelector("#npCardButton");
const bronzeButton = document.querySelector("#bronzeCardButton");
const silverButton = document.querySelector("#silverCardButton");
const goldButton = document.querySelector("#goldCardButton");

const dialogBox = document.querySelector("#dialogBox");
const dialogBoxHeader = document.querySelector("#top-row h3")
const dialogBoxText = document.querySelector("#level-details");
const closeButton = document.querySelector("#closeButton");

npButton.addEventListener("click", () => {
    dialogBoxHeader.textContent = "NP Level"
    dialogBoxText.innerHTML = 
    `<p> Cost: $100/yr</p>
    <ul>
    <li>Includes all bronze membership benefits at a reduced cost:</li>
    <li>Link from Chamber Directory to your website/social media</li>
    <li>New member recognition in our monthly newsletter</li>
    <li>Discounted vendor spot at the summer farmer's market</li>
    <li>Chamber Newsletter subscription</li>
    <li>Brochure Space at the Chamber Visitor Center</li> 
    </ul>
    `;
    dialogBox.showModal();
});

bronzeButton.addEventListener("click", () => {
    dialogBoxHeader.textContent = "Bronze Level";
    dialogBoxText.innerHTML = `<p> Cost: $250/yr</p>
    <p>Includes:</p>
    <ul>
    <li>Link from Chamber Directory to your website/social media</li>
    <li>New member recognition in our monthly newsletter</li>
    <li>Discounted vendor spot at the summer farmer's market</li>
    <li>Chamber Newsletter subscription</li>
    <li>Brochure Space at the Chamber Visitor Center</li>
    </ul> 
    `;
    dialogBox.showModal();
});

silverButton.addEventListener("click", () => {
    dialogBoxHeader.textContent = "Silver Level";
    dialogBoxText.innerHTML = `<p> Cost: $350/yr</p>
    <p>Includes:</p>
    <ul>
    <li>Link from Chamber Directory to your website/social media</li>
    <li>New member recognition in our monthly newsletter</li>
    <li>Discounted vendor spot at the summer farmer's market</li>
    <li>Chamber Newsletter subscription</li>
    <li>Brochure Space at the Chamber Visitor Center</li> 
    <li>50% discount on one (1) ticket to annual chamber meeting & dinner</li>
    <li>Three (3) keywords added in online chamber membership directory</li>
    <li>Two (2) Three Forks phone books, outside Listing, 2.5″ ad in Yellow Pages & 1/6 page ad</li>
    </ul>`;
    dialogBox.showModal();
});

goldButton.addEventListener("click", () => {
    dialogBoxHeader.textContent = "Gold Level";
    dialogBoxText.innerHTML = `<p> Cost: $500/yr</p>
    <p>Includes:</p>
    <ul>
    <li>Link from Chamber Directory to your website/social media</li>
    <li>New member recognition in our monthly newsletter</li>
    <li>Discounted vendor spot at the summer farmer's market</li>
    <li>Chamber Newsletter subscription</li>
    <li>Brochure Space at the Chamber Visitor Center</li> 
    <li>One (1) complimentary ticket to annual chamber meeting & dinner</li>
    <li>Four (4) keywords added in online chamber membership directory</li>
    <li>Three Forks phone book listing, outside Listing, 2.5″ ad in Yellow Pages & 1/4 page ad</li> 
    </ul>`;
    dialogBox.showModal();
});

closeButton.addEventListener("click", ()=>{
    dialogBox.close();
})