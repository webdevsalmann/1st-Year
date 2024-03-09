



let themeBtn = document.getElementById("theme-btn");
function themeChange(){
    if (themeBtn.checked === true){
    document.body.classList.add("light-theme");
    document.getElementById("logo").setAttribute("src","./images/logo/logo-light.svg")
    } else if (themeBtn.checked === false) {
        document.body.classList.remove("light-theme");
        document.getElementById("logo").setAttribute("src","./images/logo/logo-dark.svg")
    }
}
themeChange();
themeBtn.addEventListener("click", themeChange);


// All the events for dropdown dropdown 
document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-btn]");
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

    // Add active class to clicked dropdown 
    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]");
        currentDropdown.classList.add("active");
    }
    
    // Remove active class to clicked dropdown 
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown == currentDropdown) return
        dropdown.classList.remove("active");
    });
});