const iconHam = document.querySelector(".icon");
const section = document.querySelector("#total"); 
const ul=document.querySelector("#list");

function show() {
    if (section.style.marginLeft === "240px") {
        section.style.marginLeft = "0";
        ul.style.marginLeft="-240px";
    } else {
        section.style.marginLeft = "240px";
        ul.style.marginLeft="0";
    }
}

iconHam.addEventListener("click", show);


