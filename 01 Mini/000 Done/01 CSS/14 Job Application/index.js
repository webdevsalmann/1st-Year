

let fileInputCV = document.getElementById("file-input-cv");
let fileInputCVLabel = document.getElementById("file-input-cv-label");
let fileList = document.getElementById("file-list");
let CVCondition = document.querySelector("[data-cv-condition]")

fileInputCV.addEventListener("change", () => {
  if (fileInputCV.files.length === 1) {
    fileInputCVLabel.style.color = "var(--clr-black)";
    
  }
  for (i of fileInputCV.files) {
    let fileName = i.name;
    fileList.innerHTML = `<li>${fileName}</li>`;
  }
  if (fileInputCV.files.length >= 1) {
    console.log(CVCondition)
    CVCondition.innerText= "Change CV"
  }
});