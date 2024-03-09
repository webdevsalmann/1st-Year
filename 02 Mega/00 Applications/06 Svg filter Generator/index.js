
let sampleImg = document.getElementById("sample-img");
let colorInput = document.getElementById("color-input");
let textInput = document.getElementById("text-input");
let btnGenerate = document.getElementById("btn-generate");
let filterCode = document.getElementById("filter-code");
let btnCopy = document.getElementById("btn-copy");
let codeLine = document.getElementById("code-line");
let percentLoss = document.getElementById("percent-loss");



function getMatchingCssFilters(color) {
  // Convert the input color to RGB values
  const hexColor = color.replace('#', '');
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  // Calculate the brightness of the color
  const brightness = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  // Calculate the contrast of the color
  const contrast = (brightness > 127.5) ? 'black' : 'white';

  // Generate the CSS filter properties
  const cssFilters = {
    brightness: `brightness(${brightness}%)`,
    contrast: `contrast(${contrast})`,
  };

  let filter = `brightness(${brightness}%), contrast(${contrast}%)`

  return filter;
}





// =================================================Color Input Handler 
colorInput.addEventListener("input", () => {
  textInput.value = colorInput.value;
});
// =================================================Generate Btn 
btnGenerate.addEventListener("click", () => {
  let code = getMatchingCssFilters(textInput.value)
  // percentLoss.innerText=`Color loss: ${code.colorLossPercentage.toFixed(2)}%`;
  filterCode.innerText = code;
  sampleImg.style.filter = code;
});
// =================================================Input Handler 
textInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    btnGenerate.click();
  }
});
textInput.addEventListener("input", () => {
  colorInput.value = textInput.value;
});

// =================================================Copy to clipboard
btnCopy.addEventListener('click', () => {
  navigator.clipboard.writeText(codeLine.innerText);
  btnCopy.innerText = "copied";
  setTimeout(() => {
    btnCopy.innerText = "copy";
  }, 10000);
})

