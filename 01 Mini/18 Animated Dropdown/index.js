


const dropdown = document.querySelector('.dropdown');
const dropdownBtn = document.querySelector('.btn-dropdown');

dropdownBtn.addEventListener("click", () => {
    dropdown.classList.toggle("active");
});

document.onclick = (e) => {
    if (e.target != dropdownBtn) {
        dropdown.classList.remove("active")
    }
}