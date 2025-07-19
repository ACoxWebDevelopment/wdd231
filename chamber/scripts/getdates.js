function currentyear()
{
    let year=new Date().getFullYear();
    document.getElementById("currentYear").innerText = `Copyright ${year}`;
}

function lastModified() {
    let modified= document.lastModified;
    document.getElementById("lastModified").innerText = `Last Modified: ${modified}`;
}

currentyear();
lastModified();