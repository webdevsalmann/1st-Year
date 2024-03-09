


let num1 = document.getElementById("1");
let num2 = document.getElementById("2");
let num3 = document.getElementById("3");
let num4 = document.getElementById("4");
let num5 = document.getElementById("5");
let num6 = document.getElementById("6");
let num7 = document.getElementById("7");
let num8 = document.getElementById("8");
let num9 = document.getElementById("9");
let num0 = document.getElementById("0");
let num00 = document.getElementById("00");
let numDot = document.getElementById("num-dot");

let funcAdd = document.getElementById("func-addition");
let funcSubs = document.getElementById("func-substract");
let funcMultiply = document.getElementById("func-multiply");
let funcDivde = document.getElementById("func-divide");
let funcClrAll = document.getElementById("func-clear-all");
let funcClr = document.getElementById("func-clear");
let funcBack = document.getElementById("func-back");
let funcPercentage = document.getElementById("func-percentage");

let equalBtn = document.getElementById("equal-btn");

let showFunc = document.getElementById("show-func");
let output = document.getElementById("output");



// let output_val = output.innerText;

// var no_of_guesses = 0;
// var guesses_num = [];

// function calc(num1, func, num2){
//   let inputValue = document.getElementById("guess").value;
//   var user_guess = inputValue + " ";

//   guesses_num.push(user_guess);
//   no_of_guesses += 1;

//   msg3.textContent = "No. of guesses :- " + no_of_guesses;
// }










// num1.addEventListener("click", ()=>{
//     output.value += 1;
// })
// num2.addEventListener("click", ()=>{
//     output.value += 2;
// })


// button click evenet
let numBtn = Array.from(document.querySelectorAll(".num-btn"));
numBtn.forEach((numBtn) => {
  numBtn.addEventListener("click", (e) => {
    let optVal = output.value;
    let val = e.explicitOriginalTarget.id;
    if ((optVal.length > 16) || (optVal.includes(".") && val === ".")) {
      return;
    }
    else {
      output.value += val;
    }



  });
});





let funcBtn = Array.from(document.querySelectorAll(".func-btn"));





// let calcArr = [];
// function calc(num1, operator, num2){
//   return eval((num1) (operator) (num2))
// }
// funcSubs.addEventListener("click", () => {
//   showFunc.value = output.value + " -";
//   calcArr.push(output.value);
//   calcArr.push("-");
//   output.value = "0";
//   console.log(calcArr);
// });
// equalBtn.addEventListener("click", () => {
//   calcArr.push(output.value);
//   console.log(calcArr);
  // showFunc.value = output.value + "";
// });


// Clear all the number inside calculator
funcClr.addEventListener("click", () => {
  showFunc.value = "";
  output.value="";
});
funcBack.addEventListener("click", () => {
  output.value = output.value.slice(0, -1);
});


funcAdd.addEventListener("click", () => {
  showFunc.value = output.value + " +";
  output.value = '';
});
















// let numPadVal = [96, 97, 98, 99, 100, 101, 102, 103, 104, 105]

// let guess = document.getElementById("guess");
// let myBtn = document.getElementById("my_btn");

// document.addEventListener("keyup", function (event) {
//     if (event.key === 97) {
//         let key = event.key;
//         // myBtn.click();
//         // output.innerText= + "1";
//         console.log("key was pressed")
//     }
// });



// Change level
// const lis = document.querySelectorAll('.level li');
// let currentLi = null;

// lis.forEach(li => {
//   li.addEventListener('click', event => {
//     if (currentLi !== null) {
//       currentLi.style.backgroundColor = '';
//     }
//     event.target.style.backgroundColor = 'black';
//     currentLi = event.target;

//     console.log(currentLi.id);
//   });
// });

