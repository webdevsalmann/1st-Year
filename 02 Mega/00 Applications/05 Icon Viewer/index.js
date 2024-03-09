
const selectFile = document.getElementById("select-file");
const removeAll = document.querySelector(".btn-remove-all");
const displayContainer = document.querySelector("[display-container]");
const inputRange = document.querySelector("[type=range]")
const inputColor = document.querySelector("[type=color]")

let collections = [];

selectFile.addEventListener("change", fileEvents);
// selectFile.addEventListener("drop", fileEvents);

function fileEvents(e) {
    e.preventDefault();
    collections = [];
    // Get file url and names
    inputFiles = selectFile.files;
    for (var i = 0; i < inputFiles.length; ++i) {
        let url = URL.createObjectURL(e.target.files[i]);
        displayName = e.target.files[i].name;
        let data = {
            Url: url,
            DisplayName: displayName
        }
        collections.push(data);
    }
    // Clear All the Child elements if it exist 
    clearElement(displayContainer)
    // Display Cards Respective to collections data
    collections.forEach(collection => {
        let card = document.createElement("div");
        card.classList.add("card");
        let img = document.createElement("img");
        img.setAttribute("src", collection.Url);
        let name = document.createElement("p");
        name.innerText = collection.DisplayName;
        card.appendChild(img)
        card.appendChild(name)

        displayContainer.appendChild(card);
    });
}
// remove all the previous existing element 
function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
// Clear Collection Array
removeAll.addEventListener("click", () => {
    collections = [];
    displayContainer.innerText = "Removed";
});

//Change size on range value
inputRange.addEventListener("input", setRangeValue);
function setRangeValue(){
    let cards = document.querySelectorAll(".card");
    let imgs = document.querySelectorAll(".card img");
    imgs.forEach(img => {
        img.style.width = inputRange.value + "rem";
    });
    cards.forEach(card => {
        card.style.width = inputRange.value + "rem";
    });
}

// inputColor.addEventListener("input",()=>{
//     document.getElementById("body").style.background= inputColor.value;
// });

window.onload = ()=>{
    setRangeValue()
}