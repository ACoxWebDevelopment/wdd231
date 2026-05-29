const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

const results = document.querySelector("#results");
results.innerHTML = 

`<p> Application Received ${myInfo.get("timestamp")}</p>
<p> Application for Membership into Three Foks Chamber of Commerce ${myInfo.get("level")} Level</p>
 <p> Company Name: ${myInfo.get("company")}</p>
<p> Contact Person: ${myInfo.get("first")} ${myInfo.get("last")}</p>
 <p>Your Phone: ${myInfo.get("phone")}</p>
 <p>Your email is: ${myInfo.get("email")}</p> 
 business description: ${myInfo.get("description")}`;