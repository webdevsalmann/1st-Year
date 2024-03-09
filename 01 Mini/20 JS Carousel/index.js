
const imgContainer = document.getElementById("img-container");
const imgboxs = document.querySelectorAll(".img-box");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

function runCrousal(loop) {
    imgContainer.style.left = "-" + (100 * loop) + "vw";
}

// Automatic change slides
let loop = 0;
setInterval(() => {
    loop++;
    if (loop == imgboxs.length) {
        loop = 0;
    }
    runCrousal(loop);
}, 5000);

// Change to right slide on Btn click
btnPrev.addEventListener("click", () => {
    loop--;
    if (loop == -1) {
        loop = imgboxs.length - 1;
    }
    runCrousal(loop);
});

// Change to Left slide on Btn click
btnNext.addEventListener("click", () => {
    loop++;
    if (loop == imgboxs.length) {
        loop = 0;
    }
    runCrousal(loop);
});