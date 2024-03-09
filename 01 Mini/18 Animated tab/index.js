
let tabPointerBox = document.querySelector(".tab-pointer-box");
// console.log(tabPointerBox.offsetWidth)
let activeBg = document.getElementById("active-bg");
let tabs = Array.from(document.querySelectorAll("[data-tab-target]"));
let tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        let target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add("active");
    })
})


tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => {

        let btnWidth = tab.offsetWidth;
        activeBg.style.width = btnWidth + "px";

        let boxWidth = tabPointerBox.offsetWidth;
        let tabsWidth = 0;
        tabs.forEach(tab => {
            tabsWidth += tab.offsetWidth
        });
        let blankSpace = boxWidth - tabsWidth - 32;
        let oneGap = blankSpace / (tabs.length - 1);

        // console.log(position)
        if (i == 0) {
            activeBg.style.left = 0;
        } else if (i > 0) {
            let leftTabs = 0;
            for (let j = 0; j < i; j++) {
                leftTabs += tabs[j].offsetWidth;
            }
            let position = leftTabs + (oneGap * i);
            activeBg.style.left = position + "px";
        }
    });
});


window.onload = () => {
    activeBg.style.left = 0;
    activeBg.style.width = tabs[0].offsetWidth + "px";
}