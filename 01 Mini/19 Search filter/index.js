

const words = [
    "apple", "ant", "arrow", "animal", "airplane", "alligator", "astronaut", "apricot", "acorn", "anchor", "banana", "bird", "ball", "butterfly", "bike", "book", "beach", "bus", "bag", "bridge", "cat", "car", "cup", "cookie", "cloud", "computer", "candle", "camera", "chocolate", "chair", "dog", "duck", "door", "dolphin", "dragon", "donut", "diamond", "daisy", "desk", "drum", "elephant", "egg", "ear", "envelope", "earth", "eleven", "elbow", "engine", "eraser", "eyeball", "fox", "fish", "flower", "fan", "frog", "fire", "feather", "flag", "fork", "flashlight", "giraffe", "grape", "goat", "guitar", "globe", "ghost", "glasses", "gift", "garden", "garage", "horse", "hat", "house", "heart", "helicopter", "hammer", "hamburger", "hotdog", "honey", "hourglass", "iguana", "island", "ice cream", "ink", "insect", "igloo", "iron", "ice", "internet", "iguanodon", "jaguar", "jellyfish", "jacket", "jar", "jet", "juice", "jam", "jigsaw", "jester", "jungle", "kangaroo", "kiwi", "key", "kite", "koala", "king", "kitten", "keyboard", "ketchup", "kettle", "lion", "lemon", "leaf", "lollipop", "lizard", "laptop", "lamp", "ladybug", "lake", "ladder", "monkey", "melon", "moon", "milk", "mountain", "muffin", "motorcycle", "magnet", "mouse", "map", "nest", "nut", "nose", "notebook", "night", "noodle", "necklace", "newspaper", "nail", "number", "octopus", "orange", "ocean", "owl", "oil", "onion", "otter", "orchid", "oxygen", "oven", "penguin", "pear", "piano", "pizza", "panda", "plane", "pen", "pencil", "peanut", "park", "queen", "quail", "quilt", "quill", "question", "queue", "quarter", "quiver", "quick", "quiet", "rabbit", "rose", "rainbow", "rocket", "ring", "robot", "rug", "radio", "road", "river", "snake", "sun", "star", "sandwich", "ship", "shark", "scissors", "socks", "snail", "strawberry", "tiger", "tree", "train", "turtle", "television", "tooth", "toilet", "tomato", "tent", "taco", "unicorn", "umbrella", "underwear", "up", "utensil", "unicycle", "uniform", "usher", "ugly", "ultimate", "vase", "vegetable", "volcano", "violin", "vampire", "van", "vine", "velvet", "violet", "virus", "whale", "watermelon", "window", "watch", "wheel", "wizard", "wallet", "wood", "walrus", "waffle", "xylophone", "x-ray", "xenon", "xenopus", "xerox", "xylitol", "xenophile", "xmas", "xenogenesis", "xenocryst", "yak", "yogurt", "yo-yo", "yacht", "yarn", "yellow", "yawn", "yogurt", "yoga", "yucca", "zebra", "zoo", "zipper", "zeppelin", "zombie", "zealot", "zucchini", "zigzag", "zephyr", "zircon"
];

let list = document.getElementById("list");
for (const word of words) {
    let listItem = document.createElement("li");
    listItem.classList.add("list-item");
    listItem.innerText = word;
    let editText = document.createElement("span");
    editText.classList.add("edit-text");

    listItem.appendChild(editText);
    list.appendChild(listItem);
}


let listItems = Array.from(document.getElementsByClassName("list-item"));
let inputSearch = document.getElementById("input-search");
inputSearch.addEventListener("input", function () {
    let filterValue = this.value.toLowerCase();
    listItems.forEach(li => {
        if (li.textContent.toLowerCase().includes(filterValue)) {

            let noOfLists = 0;
            li.style.display = "flex";
            
        } else {
            li.style.display = "none";
        }
    })
});


// Search on Google 
// let searchButton = document.getElementById("search-button");
// searchButton.addEventListener("click", function() {
//     let filterValue = inputSearch.value;
//     if (filterValue) {
//         window.location.href = "https://www.google.com/search?q=" + filterValue;
//     }
// });




// Clear Input Field 
let clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", function () {
    inputSearch.value = "";
    inputSearch.focus();
});

// on click enter, search 
inputSearch.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        // searchButton.click();
    }
});

// // Add Item in Input Field 
listItems.forEach(li => {
    li.addEventListener("click", function () {
        inputSearch.value = this.textContent;
        // searchButton.click();
    });
});

// Edit text button 
let btnEditText = document.querySelectorAll(".edit-text");
btnEditText.forEach(btn => {
    btn.addEventListener("click", () => {
        // let itemText = this.previousSibling.textContent;
        // inputSearch.value = itemText;
    });
});