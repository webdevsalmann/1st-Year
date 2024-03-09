

let guess = document.getElementById("guess");
let myBtn = document.getElementById("my_btn");
var msg1 = document.getElementById("message1")
var msg2 = document.getElementById("message2")
var msg3 = document.getElementById("message3")




let guessUnder = 100;
let answer = Math.floor(Math.random() * guessUnder) + 1;


var no_of_guesses = 0;
var guesses_num = [];

function play() {
    // take the input value 
    let inputValue = document.getElementById("guess").value;
    // console.log( typeof(inputValue))

    var user_guess = inputValue + " ";

    if (inputValue < 0 || inputValue > guessUnder) {
        alert("Please Enter  a number Between 1 to" + guessUnder);
    }
    else {
        guesses_num.push(inputValue);
        no_of_guesses += 1;

        if (inputValue < answer) {
            guessNum("too Low", inputValue)
            msg3.textContent = "No. of guesses :- " + no_of_guesses;
        }
        else if (inputValue > answer) {
            guessNum("too high", inputValue)
            msg3.textContent = "No. Of Guesses : " + no_of_guesses;
        }
        else if (inputValue == answer) {

            msg1.textContent = "Correct";
        }
    }
}









const lis = document.querySelectorAll('.level-box .level');
let levelNum = document.getElementById("level-num");
let numBet = document.getElementById('num-between');
let currentLi = null;

lis.forEach(li => {
    li.addEventListener('click', event => {

        if (currentLi !== null) {
            currentLi.style.backgroundColor = '';
            currentLi.style.color = '';
        }

        currentLi = event.target;
        currentLi.style.backgroundColor = '#C0EEF2';
        currentLi.style.color = '#181823';


        let id = currentLi.id;
        if (id === "lev1") {
            levelNum.textContent = "1";
            guessUnder = 100;
            numBet.textContent = guessUnder;
            rNum(guessUnder);
        }
        else if (id === "lev2") {
            levelNum.textContent = "2";
            guessUnder = 1000;
            numBet.textContent = guessUnder;
            rNum(guessUnder);
        }
        else if (id === "lev3") {
            levelNum.textContent = "3";
            guessUnder = 10000;
            numBet.textContent = guessUnder;
            rNum(guessUnder);
        }
        else if (id === "lev4") {
            levelNum.textContent = "4";
            guessUnder = 100000;
            numBet.textContent = guessUnder;
            rNum(guessUnder);
        }
        else if (id === "lev5") {
            levelNum.textContent = "5";
            guessUnder = 1000000;
            numBet.textContent = guessUnder;
            rNum(guessUnder);
        }
        else if (id === "lev6") {
            levelNum.textContent = "6";
            guessUnder = 10000000;
            numBet.textContent = guessUnder;
            rNum(guessUnder);
        }
        else if (id === "lev7") {
            levelNum.textContent = "7";
            guessUnder = 100000000;
            numBet.textContent = guessUnder;
            rNum(guessUnder);
        }
        else if (id === "lev8") {
            levelNum.textContent = "8";
            guessUnder = 1000000000;
            numBet.textContent = guessUnder;
            rNum(guessUnder);
        }
        else if (id === "lev9") {
            levelNum.textContent = "9";
            guessUnder = 10000000000;
            numBet.textContent = guessUnder;
            rNum(guessUnder);
        }
        else if (id === "lev10") {
            levelNum.textContent = "10";
            guessUnder = 100000000000;
            numBet.textContent = guessUnder;
            rNum(guessUnder);
        }
    });
});












// function to add paragraph
let hintDiv = document.getElementById("hint")
let insideHint = document.getElementById("inside-hint");
let guessNumDiv = document.getElementById("guessed-num")
let insideGuessedNum = document.getElementById("inside-guessed-num");
function guessNum(hiLow, num) {


    // create message1 
    let msg1 = document.createElement("p");
    msg1.classList.add("msg");
    // msg1.setAttribute("id", "message1");
    msg1.innerText = hiLow;

    //Create heading
    let heading = document.createElement("div");
    heading.classList.add("heading");

    // create message2 
    let msg2 = document.createElement("p");
    msg2.classList.add("msg");
    // msg2.setAttribute("id", "message2");
    msg2.innerText = num;

    // add inside the inside div in reverse manner
    insideHint.insertBefore(msg1, insideHint.children[0]);
    insideGuessedNum.insertBefore(msg2, insideGuessedNum.children[0]);
}



// =================================================Named Functionalities=============================


// pressed submit when hit enter inside input 
guess.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        myBtn.click();
    }
});

// give the random number under the given parameter
function rNum(under) {
    answer = Math.floor(Math.random() * under) + 1;
    return answer;
}




function reset() {
    // let msgs =  document.querySelectorAll("msg");
    // hintDiv.removeChild(msgs);
    // guessNumDiv.removeChild(msgs);

    const msgs = document.getElementsByClassName("msg");
    while (msgs.length > 0) {
        msgs[0].parentNode.removeChild(msgs[0]);
    }
}

window.onload = () => {
    if (currentLi === null) {
        let level1 = lis[0];
        level1.style.backgroundColor = '#C0EEF2';
        level1.style.color = '#181823';
    }
    window.onclick = () => {
        if (currentLi !== null) {
            let level1 = lis[0];
            level1.style.backgroundColor = '';
            level1.style.color = '';
        }
    }
}