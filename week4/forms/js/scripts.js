const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

document.querySelector("#results").innerHTML =

`<p> Appointment for ${myInfo.get("first")} ${myInfo.get("last")}</p>
<p>${myInfo.get("ordinance")} on ${myInfo.get("date")} in the ${myInfo.get("location")} temple</p>
<p>Your Phone: ${myInfo.get("phone")}</p>
Your email is: ${myInfo.get("email")} `;