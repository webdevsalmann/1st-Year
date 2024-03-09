

const toggleBtn = document.querySelector(".ham-icon");
const sidebar = document.querySelector(".sidebar");
const displaySection = document.querySelector(".display-section")
const profileBox = document.querySelector(".profile-box")
const listItems = document.querySelectorAll(".list-item");

toggleBtn.onclick = function () {
    toggleBtn.classList.toggle('active');
    sidebar.classList.toggle("active");
    profileBox.classList.toggle("active");
    displaySection.classList.toggle('active');
}

listItems.forEach(listItem => {
    listItem.addEventListener("click", (e) => {
        listItems.forEach(listItem=>{
            listItem.classList.remove("active")
        });
        e.target.classList.add("active");
    });
});

