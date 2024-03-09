
const prize = {
    1: 8,
    2: 7,
    3: 6,
    4: 5,
    5: 4,
    6: 3,
    7: 2,
    8: 1
}

let modal = document.getElementById("modal");
let wheel = document.getElementById("wheel");
let btnSpin = document.getElementById("btn_spin");
let output = document.getElementById("output");
let deg = 0;


function reset() {
    wheel.style.transition = "none";
    wheel.style.transform = "rotate(0deg)";
}

function handleWin(winningDeg) {
    let winNum = Math.ceil((winningDeg) / 45);
    output.innerText = prize[winNum];
}

btnSpin.addEventListener("click", () =>{
    reset();
    btnSpin.style.pointerEvents = 'none';
    deg = Math.floor(2720 + Math.random() * (720));
    wheel.style.transition = "3s ease-out"
    wheel.style.transform = "rotate(" + deg + "deg)"
})

wheel.ontransitionend = () => {
    btnSpin.style.pointerEvents = "auto";
    const actualDeg = deg % 360;
    wheel.style.transition = "none";
    wheel.style.transform = "rotate(" + actualDeg + "deg)";
    handleWin(actualDeg);

    setTimeout(() => {
        modal.style.display = "flex";
    }, 500)
}

// let modal = document.getElementById("modal");
document.getElementById("btn-spin_again").addEventListener("click", ()=>{
    modal.style.display = "none";
    btnSpin.click();
})
document.getElementById("btn-close").addEventListener("click", ()=>{
    modal.style.display = "none";
})
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}