


// Display Active Tab Indicator 
let layers = document.querySelectorAll("[data-active-layer]");
let tabContents = document.querySelectorAll("[data-tab-content]");
layers.forEach(layer => {
    layer.addEventListener("click", (e) => {
        // highlight layer number 
        layers.forEach(layer => layer.classList.remove("is-active"));
        e.target.classList.add("is-active");
        // display active layer
        tabContents.forEach(tabContent => tabContent.classList.remove('is-active'));
        let selectedContent = document.querySelector(layer.dataset.activeLayer);
        selectedContent.classList.add("is-active");
    });
}); // -- Complete





// Set position in selected the Text area
function setPosition(element, position) {
    element.style.position = position.value;
    element.dispatchEvent(new Event('input'));
    // elementWidth.input();    
    // console.log(element.style.position);
}

// Set value and unit in the Text area
function setRangeValue(element, range, input, styleproperty, unit) {
    element.style[styleproperty] = range.value + unit.value;
    input.value = range.value;
} // -- Complete

// Update range and value based on input chick
const numberInputs = document.querySelectorAll(".number-input");
numberInputs.forEach(input => {
    input.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            dataValue = input.dataset.value;
            const rangeElement = document.querySelector(`[data-${dataValue}-range]`);
            rangeElement.value = input.value;

            rangeElement.dispatchEvent(new Event('input'));
        }
    });
}); // -- Complete

// change unit based on select Change 
const units = document.querySelectorAll(".unit");
units.forEach(unit => {
    unit.addEventListener("change", () => {
        dataUnitSelect = unit.dataset.unitSelect;
        const rangeElement = document.querySelector(`[data-${dataUnitSelect}-range]`);
        rangeElement.dispatchEvent(new Event('input'));
        // console.log(rangeElement)
    });
}); // -- Complete





// // ==============================================Checkbox 
const frame = document.querySelector("[data-frame]");
const framePositionSelect = document.querySelector("[data-frame-position-select]")
const frameWidthRange = document.querySelector("[data-frame-width-range]");
const frameWidthInput = document.querySelector("[data-frame-width-input]");
const frameWidthUnitSelect = document.querySelector("[data-frame-width-unit-select]");
const frameHeightRange = document.querySelector("[data-frame-height-range]");
const frameHeightInput = document.querySelector("[data-frame-height-input]");
const frameHeightUnitSelect = document.querySelector("[data-frame-height-unit-select]");
const frameBorderRadiusRange = document.querySelector("[data-frame-border-radius-range]");
const frameBorderRadiusInput = document.querySelector("[data-frame-border-radius-input]");
const frameBorderRadiusUnitSelect = document.querySelector("[data-frame-border-radius-unit-select]");


framePositionSelect.addEventListener("change", setPosition.bind(null, frame, framePositionSelect), false);
frameWidthRange.addEventListener("input", setRangeValue.bind(null, frame, frameWidthRange, frameWidthInput, "width", frameWidthUnitSelect), false);
frameHeightRange.addEventListener("input", setRangeValue.bind(null, frame, frameHeightRange, frameHeightInput, "height", frameHeightUnitSelect), false);
frameBorderRadiusRange.addEventListener("input", setRangeValue.bind(null, frame, frameBorderRadiusRange, frameBorderRadiusInput, "borderRadius", frameBorderRadiusUnitSelect), false);



// // ==============================================Layer-1 
const layer1 = document.getElementById("layer-1");

const layer1WidthRange = document.querySelector("[data-layer1-width-range]");
const layer1WidthInput = document.querySelector("[data-layer1-width-input]");
const layer1WidthUnitSelect = document.querySelector("[data-layer1-width-unit-select]");

const layer1HeightRange = document.querySelector("[data-layer1-height-range]");
const layer1HeightInput = document.querySelector("[data-layer1-height-input]");
const layer1HeightUnitSelect = document.querySelector("[data-layer1-height-unit-select]");
// console.log(layer1HeightInput)

const layer1BorderRadiusRange = document.querySelector("[data-layer1-border-radius-range]");
const layer1BorderRadiusInput = document.querySelector("[data-layer1-border-radius-input]");
const layer1BorderRadiusUnitSelect = document.querySelector("[data-layer1-border-radius-unit-select]");

const layer1PositionSelect = document.querySelector("[data-layer1-position-select]")

const layer1TopRange = document.querySelector("[data-layer1-top-range]");
const layer1TopInput = document.querySelector("[data-layer1-top-input]");
const layer1TopUnitSelect = document.querySelector("[data-layer1-top-unit-select]");

const layer1LeftRange = document.querySelector("[data-layer1-left-range]");
const layer1LeftInput = document.querySelector("[data-layer1-left-input]");
const layer1LeftUnitSelect = document.querySelector("[data-layer1-left-unit-select]");

// Checked 
const layer1LeftCheckedRange = document.querySelector("[data-layer1-left-checked-range]");
const layer1LeftCheckedInput = document.querySelector("[data-layer1-left-checked-input]");
const layer1LeftCheckedUnitSelect = document.querySelector("[data-layer1-left-checked-unit-select]");



// // Set value and unit in the Text area
// const cb = document.getElementById("cb");
// cb.addEventListener("click", () => {
//     if (cb.checked == true) {
//         layer1.setAttribute("data-layer-1", "")
//         var stylesheet = document.styleSheets[1];
//         let rule = null;
//         for (let i = 0; i < stylesheet.cssRules.length; i++) {
//             if (stylesheet.cssRules[i].selectorText === '.display .cb:checked + #layer-1') {
//                 rule = stylesheet.cssRules[i];
//                 break;
//             }
//         }

//         rule.style.backgroundColor = "#ffffff"
//         // rule.style.left = "100px"
//     } else if (cb.checked == false) {
//         // cb.classList.remove("is-active");
//     }
// });



// layer-1 functions 
layer1PositionSelect.addEventListener("change", setPosition.bind(null, layer1, layer1PositionSelect), false);
layer1TopRange.addEventListener("input", setRangeValue.bind(null, layer1, layer1TopRange, layer1TopInput, "top", layer1TopUnitSelect), false);
layer1LeftRange.addEventListener("input", setRangeValue.bind(null, layer1, layer1LeftRange, layer1LeftInput, "left", layer1LeftUnitSelect), false);

layer1WidthRange.addEventListener("input", setRangeValue.bind(null, layer1, layer1WidthRange, layer1WidthInput, "width", layer1WidthUnitSelect), false);
layer1HeightRange.addEventListener("input", setRangeValue.bind(null, layer1, layer1HeightRange, layer1HeightInput, "height", layer1HeightUnitSelect), false);
layer1BorderRadiusRange.addEventListener("input", setRangeValue.bind(null, layer1, layer1BorderRadiusRange, layer1BorderRadiusInput, "borderRadius", layer1BorderRadiusUnitSelect), false);




// // ==============================================Layer-2 
const layer2 = document.getElementById("layer-2");

const layer2WidthRange = document.querySelector("[data-layer2-width-range]");
const layer2WidthInput = document.querySelector("[data-layer2-width-input]");
const layer2WidthUnitSelect = document.querySelector("[data-layer2-width-unit-select]");


const layer2HeightRange = document.querySelector("[data-layer2-height-range]");
const layer2HeightInput = document.querySelector("[data-layer2-height-input]");
const layer2HeightUnitSelect = document.querySelector("[data-layer2-height-unit-select]");

const layer2BorderRadiusRange = document.querySelector("[data-layer2-border-radius-range]");
const layer2BorderRadiusInput = document.querySelector("[data-layer2-border-radius-input]");
const layer2BorderRadiusUnitSelect = document.querySelector("[data-layer2-border-radius-unit-select]");

const layer2PositionSelect = document.querySelector("[data-layer2-position-select]")

const layer2TopRange = document.querySelector("[data-layer2-top-range]");
const layer2TopInput = document.querySelector("[data-layer2-top-input]");
const layer2TopUnitSelect = document.querySelector("[data-layer2-top-unit-select]");

const layer2LeftRange = document.querySelector("[data-layer2-left-range]");
const layer2LeftInput = document.querySelector("[data-layer2-left-input]");
const layer2LeftUnitSelect = document.querySelector("[data-layer2-left-unit-select]");




// layer-2 functions 
layer2PositionSelect.addEventListener("change", setPosition.bind(null, layer2, layer2PositionSelect), false);
layer2TopRange.addEventListener("input", setRangeValue.bind(null, layer2, layer2TopRange, layer2TopInput, "top", layer2TopUnitSelect), false);
layer2LeftRange.addEventListener("input", setRangeValue.bind(null, layer2, layer2LeftRange, layer2LeftInput, "left", layer2LeftUnitSelect), false);

layer2WidthRange.addEventListener("input", setRangeValue.bind(null, layer2, layer2WidthRange, layer2WidthInput, "width", layer2WidthUnitSelect), false);
layer2HeightRange.addEventListener("input", setRangeValue.bind(null, layer2, layer2HeightRange, layer2HeightInput, "height", layer2HeightUnitSelect), false);
layer2BorderRadiusRange.addEventListener("input", setRangeValue.bind(null, layer2, layer2BorderRadiusRange, layer2BorderRadiusInput, "borderRadius", layer2BorderRadiusUnitSelect), false);







window.onload = () => {
    // set default Units 
    units.forEach(unit => unit.value = "px");

    // set default Values
    const ranges = document.querySelectorAll("[type=range]")
    ranges.forEach(range => {
        range.value = range.defaultValue;
        range.dispatchEvent(new Event('input'));
    });

    // set default Position
    const positions = document.querySelectorAll("[data-position-select]");
    positions.forEach(position => position.value = "relative");
} 
