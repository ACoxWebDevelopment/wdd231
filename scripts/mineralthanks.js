const timestamp = new Date();
const getString = window.location.search;

const myInfo = new URLSearchParams(getString)

const results = document.querySelector("#results");
results.innerHTML =

`<p> Application Received ${timestamp.toLocaleString()}</p>
<p> Three Forks Gem and Mineral Club Application</p>
<p> Contact Person: ${myInfo.get("first")} ${myInfo.get("last")}</p>
 <p>Your Phone: ${myInfo.get("phone")}</p>
 <p>Your email is: ${myInfo.get("email")}</p> 
 <p>Comments or Feedback: ${myInfo.get("description")}`;