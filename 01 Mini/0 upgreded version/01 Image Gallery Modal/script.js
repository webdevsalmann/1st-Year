

let modalBox = document.getElementById("modal-box");
let modalImg = document.getElementById("modal-img");

// open Modal
function openModal(img) {
  currentImage = Array.from(images).indexOf(img);
  modalBox.style.display = "flex";
  modalImg.src = img.src;
  modalImg.setAttribute("data-src", img.src);
}

//Close Modal
document.getElementById("close-modal").addEventListener("click", () => {
  let modalBox = document.getElementById("modal-box");
  modalBox.style.display = "none";
})

// Download Image
document.getElementById("download_btn").addEventListener("click", () => {
  let imageUrl = modalImg.getAttribute("data-src");
  let link = document.createElement("a");
  fetch(imageUrl)
    .then(response => response.blob())
    .then(blob => {
      let objectURL = URL.createObjectURL(blob);
      link.href = objectURL;
      link.download = "image.jpg";
      link.click();
    });
}
);

// Previous and next button 
let currentImage = 0;
let images = document.getElementsByClassName("gallery-img");
// prev image 
function prevSlide() {
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  let modalImg = document.getElementById("modal-img");
  modalImg.src = images[currentImage].src;
}
// next image 
function nextSlide() {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  let modalImg = document.getElementById("modal-img");
  modalImg.src = images[currentImage].src;
}

// Image container height 
// function sumOfHeights() {
//   let images = document.getElementsByClassName("img");
//   console.log(images.length)
//   let sum = 0;
//   for (let i = 0; i < images.length; i++) {
//     sum += images[i].offsetHeight;
//   }
//   let totalHeight = (sum / 2.5) / 16;
//   // console.log(totalHeight + "rem");
//   let container = document.getElementById("container");
//   container.style.height = totalHeight + "rem";

// }
// sumOfHeights()

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalBox) {
    modalBox.style.display = "none";
  }
} 