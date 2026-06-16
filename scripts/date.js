const copy= document.querySelector("#copyYear");
const mod = document.querySelector("#modified");
const today = new Date();
const joinTime = document.getElementById("#timestamp")
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

copy.innerHTML = `\u00A9 ${today.getFullYear()}`; //get current year and place in copy variable
mod.innerHTML = `Last Modified ${document.lastModified}`;

function joinTimestamp(){
  if(joinTime)
    {
      joinTime.value = new Date().toISOString();
    }

}
joinTimestamp();