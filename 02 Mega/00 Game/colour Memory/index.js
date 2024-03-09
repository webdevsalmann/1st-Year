

let red = document.getElementById("red")
let blue = document.getElementById("blue")
let yellow = document.getElementById("yellow")
let green = document.getElementById("green")
let controller = document.getElementsByClassName("controller")[0];
let btnStart = document.getElementById("btn-start")
let keyBtns = Array.from(document.querySelectorAll(".controller .key"));

controller.style.pointerEvents = "none";


// Animation Playing on clicking the controller 
keyBtns.forEach(keyBtn => {
    keyBtn.addEventListener("click", (e) => {
        let targetedElement = e.target
        // set Animation to targetd key 
        e.target.classList.add("key-clicked");
        setTimeout(() => {
            e.target.classList.remove("key-clicked");
        }, 100);
    });
});


// STEP-1 click the play button To click any one number
// let colorKey = document.querySelectorAll(".key");


let rClr = [red, blue, yellow, green];
let compClrs = [];
let myClrs = [];
function play() {
    btnStart.style.opacity = ".5";
    btnStart.style.pointerEvents = "none";

    // let numOfClrOfComp = 0;
    async function compTurn() {
        btnStart.style.opacity = "1";
        btnStart.style.pointerEvents = "auto";

        let rNum = Math.floor(Math.random() * 4);
        rClr[rNum].click()
        compClrs.push(rClr[rNum]);
        // numOfClrOfComp +1;
        // console.log(compClrs);
    }
    compTurn().then(() => {
        console.log("completed");
        controller.style.pointerEvents = "auto";
    }
    );
    // function myTurn() {
    //     compClrs.push(rClr[rNum]);
    //     console.log(rClr);
    // }

}

if (myClrs == compClrs){
    console.log("color matched successfully");
} else {
    console.log("color doesnt match");
}

// STEP-2 machine click on a random colour on controller

// STEP-3 if I click the write button then game moves forward , else I will fail 

// STEP-4  Afrer ending the game The modal show how much Progress I have been done











// clicking the controller using the button of the keyboard 
window.addEventListener("keyup", (e) => {
    let key = e.key;
    // console.log(key)
    if (((key === "w") || (key === "ArrowUp"))) {
        red.click();
    } else if (((key === "d") || (key === "ArrowRight"))) {
        blue.click();
    } else if (((key === "s") || (key === "ArrowDown"))) {
        yellow.click();
    } else if (((key === "a") || (key === "ArrowLeft"))) {
        green.click();
    }
})