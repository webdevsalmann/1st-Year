
// =========================================================Const Declaration
const LOCAL_STORAGE_DATA_KEY = "datas.data";
const LOCAL_STORAGE_SELECTED_DATA_ID_KEY = "datas.selectedDataId";

const contentBlock = document.getElementById("content-block");

const addCatBtn = document.getElementById("add-cat-btn");
const addCatInput = document.getElementById("add-cat-input");

const modalAlertText = document.getElementById("modal-alert-text");
const queryModalBtns = Array.from(document.getElementsByClassName("query-btn-modal"));
const btnModalYes = document.getElementById("btn_modal-yes");
const btnModalNo = document.getElementById("btn_modal-no");



// ==============================================================================
// ==============================================================================
// Parseing the value with respect to key and Getting the value in js object
let data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA_KEY)) || [];
// Parseing the value of respected key
// let selectedDataId = localStorage.getItem(LOCAL_STORAGE_SELECTED_DATA_ID_KEY);
// Save Data
function save() {
    localStorage.setItem(LOCAL_STORAGE_DATA_KEY, JSON.stringify(data));
}



// ================================================content-block Display Card Section 
function displayAllCard(data) {
    for (let i of data) {
        let CatName = i.categoryName;
        let CatDesc = i.categoryDescription;

        // Create category-section
        let categorySection = document.createElement("section");
        categorySection.setAttribute("id", CatName.toLowerCase().replace(/\s+/g, ''));
        categorySection.classList.add(CatName.toLowerCase().replace(/\s+/g, ''), "category-section", "hide");
        categorySection.dataset.id = i.id;
        // categorySection.setAttribute("data-aos", "zoom-in-up");
        // Create category-heading
        let categoryHeading = document.createElement("h1");
        categoryHeading.classList.add("category-heading");
        categoryHeading.innerText = CatName;
        // Create category-detail
        let categoryDetail = document.createElement("p");
        categoryDetail.innerText = CatDesc;
        // Append in Category section
        categorySection.appendChild(categoryHeading);
        if (CatDesc !== undefined) {
            categorySection.appendChild(categoryDetail);
        }


        for (let j of i.subCategory) {
            let subCatName = j.subCategoryName;

            // Create sub-category-section
            let subCategorySection = document.createElement("section");
            subCategorySection.setAttribute("id", subCatName.toLowerCase().replace(/\s+/g, ''));
            subCategorySection.classList.add("sub-category-section",);
            // subCategorySection.dataset.id = j.id;
            // Create sub-cat-heading
            let subCatHeading = document.createElement("h2");
            // subCatHeading.setAttribute("id", subCatName);
            subCatHeading.classList.add("sub-cat-heading");
            subCatHeading.innerText = subCatName;
            // subCatHeading.setAttribute("data-aos", "fade-right");
            // Create display-card-section
            let displayCardSection = document.createElement("div");
            displayCardSection.classList.add("display-card-section");
            displayCardSection.dataset.subCatId = j.id;
            displayCardSection.innerHTML = "";


            // add Editable Card Before All Card releted to sub Category 
            if (displayCardSection.children.length < 2 || !displayCardSection.firstChild.classList.contains("editable-card") || j.length == 0) {

                // Create editable-Card for Display Card Section
                let editableCard = document.createElement("div");
                editableCard.classList.add("card", "editable-card", "editable");
                editableCard.dataset.catId = i.id;
                editableCard.dataset.subCatId = j.id;
                for (let k of j.card) {
                    editableCard.dataset.cardId = k.id;
                }

                //Create imageBox
                let imageBox = document.createElement("div");
                imageBox.classList.add("image-box");

                // Create input file for load image
                let imgInput = document.createElement("input");
                imgInput.classList.add("image", "img-input");
                imgInput.setAttribute("type", "file");
                imgInput.setAttribute("accept", "image/*");
                imgInput.dataset.subCatId = j.id;

                //Create img element
                let image = document.createElement("img");
                image.classList.add("image", "demo-image");
                image.setAttribute("src", "./image/icon/card-image.svg");
                image.setAttribute("onerror", "this.onerror=null; this.src='./image/Image.jpg'");
                image.dataset.subCatId = j.id;

                imageBox.appendChild(imgInput);
                imageBox.appendChild(image);

                // info box 
                let infoBox = document.createElement("div");
                infoBox.classList.add("info-box");

                // Name Fill box 
                let nameFillBox = document.createElement("div");
                nameFillBox.classList.add("fill-box");
                let nameImg = document.createElement("img");
                nameImg.setAttribute("src", "./image/icon/pencil.svg")
                let nameInput = document.createElement("input");
                nameInput.classList.add("name-input");
                nameInput.setAttribute("type", "text");
                nameInput.setAttribute("placeholder", "Web Name");
                nameInput.dataset.subCatId = j.id;
                // Append in Fill Box
                nameFillBox.appendChild(nameImg);
                nameFillBox.appendChild(nameInput);

                // Desc Fill box 
                let descFillBox = document.createElement("div");
                descFillBox.classList.add("fill-box");
                let descImg = document.createElement("img");
                descImg.setAttribute("src", "./image/icon/list.svg")
                let descInput = document.createElement("input");
                descInput.classList.add("desc-input");
                descInput.setAttribute("type", "text");
                descInput.setAttribute("placeholder", "Short Description");
                descInput.dataset.subCatId = j.id;
                // Append in Fill Box
                descFillBox.appendChild(descImg);
                descFillBox.appendChild(descInput);

                // Pricing Fill box 
                let pricingFillBox = document.createElement("div");
                pricingFillBox.classList.add("fill-box");
                let pricingImg = document.createElement("img");
                pricingImg.setAttribute("src", "./image/icon/tags.svg")
                let pricingInput = document.createElement("input");
                pricingInput.classList.add("pricing-input");
                pricingInput.setAttribute("type", "text");
                pricingInput.setAttribute("placeholder", "Pricing Type");
                pricingInput.dataset.subCatId = j.id;
                // Append in Fill Box
                pricingFillBox.appendChild(pricingImg);
                pricingFillBox.appendChild(pricingInput);

                // Linking Fill box 
                let linkFillBox = document.createElement("div");
                linkFillBox.classList.add("fill-box");
                let linkImg = document.createElement("img");
                linkImg.setAttribute("src", "./image/icon/link-45deg.svg");
                let linkInput = document.createElement("input");
                linkInput.classList.add("link-input");
                linkInput.setAttribute("type", "text");
                linkInput.setAttribute("placeholder", "Web Link");
                linkInput.dataset.subCatId = j.id;
                // Append in Fill Box
                linkFillBox.appendChild(linkImg);
                linkFillBox.appendChild(linkInput);

                // Add Button 
                let addCardButton = document.createElement("button");
                addCardButton.classList.add("btn", "add-card");
                addCardButton.innerText = "Add Card";
                addCardButton.dataset.catId = i.id;
                addCardButton.dataset.subCatId = j.id;
                for (let k of j.card) {
                    addCardButton.dataset.cardId = k.id;
                }

                // append in infoBox 
                infoBox.appendChild(nameFillBox);
                infoBox.appendChild(descFillBox);
                infoBox.appendChild(pricingFillBox);
                infoBox.appendChild(linkFillBox);
                infoBox.appendChild(addCardButton);

                editableCard.appendChild(imageBox);
                editableCard.appendChild(infoBox);

                displayCardSection.appendChild(editableCard);
            }

            for (let k of j.card) {
                let kName = k.shownName;
                let kDesc = k.showDescription;
                let kLink = k.link;
                if (kLink.startsWith("https://")) {
                    kLink = k.link;
                } else
                    if (!kLink.startsWith("https://")) {
                        kLink = "https://" + k.link;
                    }
                let kImg = k.image;
                let kPricing = k.pricing;

                //Card
                let card = document.createElement("div");
                card.classList.add("card");
                card.setAttribute("data-aos", "zoom-in-up");
                card.dataset.id = k.id;
                //Delete Button
                let removeCardBtn = document.createElement("div");
                removeCardBtn.classList.add("remove-card-btn", "editable");
                removeCardBtn.dataset.catId = i.id;
                removeCardBtn.dataset.subCatId = j.id;
                removeCardBtn.dataset.cardId = k.id;
                removeCardBtn.innerText = "+";
                // imageBox
                let imageBox = document.createElement("div");
                imageBox.classList.add("image-box");
                // img element
                let image = document.createElement("img");
                image.classList.add("image");
                image.setAttribute("src", kImg);
                image.setAttribute("onerror", "this.onerror=null; this.src='./image/Image.jpg'");
                // info-box
                let infoBox = document.createElement("div");
                infoBox.classList.add("info-box");
                // webName
                let webName = document.createElement("p");
                webName.classList.add("web-name");
                webName.innerText = kName;
                // detail
                let detail = document.createElement("p");
                detail.classList.add("detail");
                detail.innerText = kDesc;
                // info-box
                let btnBox = document.createElement("div");
                btnBox.classList.add("btn-box");
                let pricing = document.createElement("p");
                pricing.classList.add("pricing");
                // pricing.innerText = "pricing";
                pricing.innerText = kPricing;
                //Create btn
                let btnVisit = document.createElement("a");
                btnVisit.classList.add("btn_visit");
                btnVisit.setAttribute("href", kLink);
                btnVisit.setAttribute("target", "_blank");
                btnVisit.innerText = "Open";
                //   appending inside card
                card.appendChild(removeCardBtn);
                card.appendChild(imageBox);
                imageBox.appendChild(image);
                card.appendChild(infoBox);
                infoBox.appendChild(webName);
                infoBox.appendChild(detail);
                infoBox.appendChild(btnBox);
                btnBox.appendChild(btnVisit);
                if (kPricing !== "") {
                    btnBox.appendChild(pricing);
                }
                //   append in displayCardSection which is inside sub-category-section
                displayCardSection.appendChild(card);
            }

            // Apend in SubCategory section
            subCategorySection.appendChild(subCatHeading);
            subCategorySection.appendChild(displayCardSection);

            // Apend in Category section
            categorySection.appendChild(subCategorySection);
            // Apend category section in content Block
            contentBlock.appendChild(categorySection)
        }
    }
} displayAllCard(data);

// ========================Create sidebar button respect to category and sub-category
const navBtnList = document.getElementById("nav_btn-list");
function displayAllCat(data) {
    for (const i of data) {
        let catBtnValue = i.categoryName;
        //Create left buttons respective to category section
        let btnCategory = document.createElement("li");
        btnCategory.classList.add("btn_category");
        btnCategory.setAttribute("id", i.id);
        btnCategory.innerText = catBtnValue;

        //Create Btn-box for remove Category Button
        let btnBox = document.createElement("div");
        btnBox.classList.add("btn-box", "remove-cat-btn", "editable");
        btnBox.dataset.catId = i.id;

        //Create button for Delete Category Button
        let deleteCatIcon = document.createElement("img");
        deleteCatIcon.setAttribute("src", "./image/icon/x.svg");

        btnBox.appendChild(deleteCatIcon);
        btnCategory.appendChild(btnBox)

        // Create Sub Category button box
        let subCatBox = document.createElement("div");
        subCatBox.classList.add("sub-cat-box");
        subCatBox.setAttribute("id", i.id);


        // add Sub Category Input Button 
        if (subCatBox.children.length < 1 || !subCatBox.firstChild.classList.contains("btn-editable")) {
            // Create btn-editable for Sub Category
            let btnEditable = document.createElement("div");
            btnEditable.classList.add("btn-editable", "editable");

            let addSubCatInput = document.createElement("input");
            addSubCatInput.classList.add("add-sub-cat-input");
            addSubCatInput.setAttribute("type", "text");
            addSubCatInput.setAttribute("placeholder", "Add Sub Category");
            addSubCatInput.setAttribute("id", i.id);

            let addSubCatBtn = document.createElement("div");
            addSubCatBtn.innerText = "+";
            addSubCatBtn.classList.add("flex-c-h", "add-sub-cat-btn", "editable");
            addSubCatBtn.setAttribute("id", i.id);

            btnEditable.appendChild(addSubCatInput);
            btnEditable.appendChild(addSubCatBtn);
            subCatBox.appendChild(btnEditable);
            // navBtnList.appendChild(subCatBox);
        }

        // Create Sub-Category
        for (const j of i.subCategory) {
            // Create left buttons respective to sub-category sections
            let btnSubCategory = document.createElement("li");
            btnSubCategory.classList.add("btn_sub-category");

            let subCatSpan = document.createElement("span");
            subCatSpan.innerText = j.subCategoryName;
            let removeSubCatBtn = document.createElement("div");
            removeSubCatBtn.classList.add("remove-sub-cat-btn", "editable");
            removeSubCatBtn.dataset.catId = i.id;
            removeSubCatBtn.dataset.subCatId = j.id;
            removeSubCatBtn.innerText = "-";

            btnSubCategory.appendChild(subCatSpan)
            btnSubCategory.appendChild(removeSubCatBtn)
            // append
            subCatBox.appendChild(btnSubCategory);
        }

        // append btnCategory-1 to navBtnList
        navBtnList.appendChild(btnCategory);
        // append subCatBox-2 to navBtnList
        navBtnList.appendChild(subCatBox);
    }
} displayAllCat(data);



// =============================================================Editable Cat Section
addCatBtn.addEventListener("click", () => {
    let catName = addCatInput.value;
    if (catName == null || catName == "") return;
    if (data.map(obj => obj.categoryName).includes(catName)) {
        // console.log("Same Name")
        alert("Can't Enter Same Category Name, Can We?");
        return;
    } else {
        data.push({ id: Date.now().toString(), categoryName: catName, subCategory: [] })
        save();
        clearElement(navBtnList, 1);
        displayAllCat(data);
        // catBtnAccordion();
        location.reload();
    }
    addCatInput.value = "";
}); addCatInput.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        addCatBtn.click();
    }
});

// ==========================================================Editable Sub-Cat Section
const addSubCatInputs = Array.from(document.getElementsByClassName("add-sub-cat-input"));
const addSubCatBtns = Array.from(document.getElementsByClassName("add-sub-cat-btn"));
addSubCatBtns.forEach(addSubCatBtn => {
    addSubCatBtn.addEventListener("click", () => {
        console.log("object")
        addSubCatInputs.forEach(addSubCatInput => {

            if (addSubCatInput.id === addSubCatBtn.id) {
                let subCatName = addSubCatInput.value;
                if (subCatName == null || subCatName == "") return;
                if (data.some((obj, i) => {
                    return obj.subCategory.findIndex((sub, j) => {
                        return sub.subCategoryName === subCatName && j !== i;
                    }) !== -1;
                })) {
                    alert("Can't Enter Same Sub Category Name, Can We?");
                    return;
                } else {
                    // ===================================================
                    // ===================================================
                    // ===================================================
                    data.find(cat => cat.id == addSubCatBtn.id).subCategory.push({ id: Date.now().toString(), subCategoryName: subCatName, card: [] });
                    save();

                    // const subCatBoxes = Array.from(document.getElementsByClassName("sub-cat-box"));
                    // subCatBoxes.forEach(subCatBox => {
                    //     if (subCatBox.id === addSubCatInput.id) {
                    //         clearElement(navBtnList, 3);
                    //         // clearElement(subCatBox, 2);
                    //         console.log("True")
                    //         // displayAllCat(data);
                    //     }
                    // });
                    location.reload();
                    clearElement(navBtnList, 3);
                    displayAllCat(data);
                }
            }
        });
    });
}); addSubCatInputs.forEach(addSubCatInput => {
    addSubCatInput.addEventListener("keypress", (e) => {
        if (e.key == "Enter") {
            addSubCatBtns.forEach(addSubCatBtn => {
                if (addSubCatBtn.id == addSubCatInput.id) {
                    addSubCatBtn.click();
                }
            })
        }
    });
});

// =============================================================Editable Card Section
const displayCardSections = Array.from(document.getElementsByClassName("display-card-section"));
const addCardBtns = Array.from(document.getElementsByClassName("add-card"));
const imgInputs = Array.from(document.getElementsByClassName("img-input"));
const nameInputs = Array.from(document.getElementsByClassName("name-input"));
const descInputs = Array.from(document.getElementsByClassName("desc-input"));
const pricingInputs = Array.from(document.getElementsByClassName("pricing-input"));
const linkInputs = Array.from(document.getElementsByClassName("link-input"));
addCardBtns.forEach(addCardBtn => {
    addCardBtn.addEventListener("click", () => {
        displayCardSections.forEach(displayCardSection => {
            imgInputs.forEach(imgInput => {
                nameInputs.forEach(nameInput => {
                    descInputs.forEach(descInput => {
                        pricingInputs.forEach(pricingInput => {
                            linkInputs.forEach(linkInput => {

                                let btnDatasetId = addCardBtn.dataset.subCatId;

                                let conditions = btnDatasetId == displayCardSection.dataset.subCatId &&
                                                 btnDatasetId == imgInput.dataset.subCatId && 
                                                 btnDatasetId == nameInput.dataset.subCatId && 
                                                 btnDatasetId == descInput.dataset.subCatId && 
                                                 btnDatasetId == pricingInput.dataset.subCatId && 
                                                 btnDatasetId == linkInput.dataset.subCatId;
                                if (conditions) {

                                    if (linkInput.value == "") {
                                        alert("please Add Link To the card")
                                        return;
                                    } else {


                                        const catObj = data.find(cat => cat.id === addCardBtn.dataset.catId);
                                        const subCatObj = catObj.subCategory.find(sub => sub.id === btnDatasetId);
                                        if (subCatObj) {

                                            subCatObj.card.push({
                                                id: Date.now().toString(),
                                                image: imgInput.textContent,
                                                shownName: nameInput.value,
                                                showDescription: descInput.value,
                                                pricing: pricingInput.value,
                                                link: linkInput.value,
                                            });
                                            save();
                                            displayAllCard(data);
                                            location.reload();
                                            // updateCardDisplay()
                                        }
                                    }
                                } else return;
                            });
                        });
                    });
                });
            });
        });

        // save();
        // clearElement(navBtnList, 3);
        // location.reload();
        // displayAllCard(data);
    });
})

// ===================================================Detect Image Change on add Card 
let demoImages = Array.from(document.getElementsByClassName("demo-image"))
function getImageSrc(file) {
    if (!file) {
        return null;
    }
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.onerror = () => {
            reject(new Error('Error occurred while reading the file.'));
        };
        reader.readAsDataURL(file);
    });
}
imgInputs.forEach(imgInput => {
    imgInput.addEventListener("change", async (e) => {

        const file = e.target.files[0];
        const src = await getImageSrc(file);
        // let storeSrc = e.target.textContent = src;
        e.target.textContent = src;

        demoImages.forEach(demoImage => {
            if (demoImage.dataset.subCatId == imgInput.dataset.subCatId) {
                // console.log(e.target.textContent)
                if (e.target.files.length == 0) {
                    return;
                }
                let file = e.target.files[0];
                let url = URL.createObjectURL(file);
                demoImage.src = url;
            }
        });
    })
});

// ===============================================================Remove Category Btn 
let removeCatBtns = Array.from(document.getElementsByClassName("remove-cat-btn"));
removeCatBtns.forEach(removeCatBtn => {
    removeCatBtn.addEventListener("click", () => {

        modalAlert.style.display = "block";
        let catId = removeCatBtn.dataset.catId;

        let catName = data.filter(item => item.id === catId);
        modalAlertText.innerText = "Do You Want to delete Category: " + catName[0].categoryName + " ?"

        queryModalBtns.forEach(modalBtn => {
            modalBtn.addEventListener("click", () => {
                if (modalBtn.id == btnModalYes.id) {
                    console.log("object")
                    data = data.filter(item => item.id !== catId);
                    save();
                    location.reload();
                    clearElement(navBtnList, 2)
                    displayAllCat(data);
                    console.log("Deleted Category")
                } else if (modalBtn.id == btnModalNo.id) {
                    closeModalAlertBtn.click();
                    console.log("no Deleted Category")
                }
            });
        });
    });
});

// ===========================================================Remove Sub Category Btn
let removeSubCatBtns = Array.from(document.getElementsByClassName("remove-sub-cat-btn"));
removeSubCatBtns.forEach(removeSubCatBtn => {
    removeSubCatBtn.addEventListener("click", (e) => {
        modalAlert.style.display = "block";
        let subCatId = removeSubCatBtn.dataset.subCatId;

        // Find the object with the matching ID
        const foundCategory = data.find(category => {
            const foundSubCategory = category.subCategory.find(subCategory => subCategory.id === subCatId);
            return foundSubCategory !== undefined;
        });
        // Retrieve the "subCategoryName" value if the object is found
        const subCategoryName = foundCategory ? foundCategory.subCategory.find(subCategory => subCategory.id === subCatId).subCategoryName : null;
        console.log(subCategoryName)

        modalAlertText.innerText = "Do You Want to delete Category: " + subCategoryName + " ?"

        queryModalBtns.forEach(modalBtn => {
            modalBtn.addEventListener("click", () => {

                if (modalBtn.id == btnModalYes.id) {
                    data.forEach(category => {
                        category.subCategory = category.subCategory.filter(sub => sub.id !== subCatId);
                    });
                    save();
                    location.reload();
                    console.log("Deleted Category")
                } else if (modalBtn.id == btnModalNo.id) {
                    closeModalAlertBtn.click();
                    console.log("no Deleted Category")
                }
            });
        });
    });
});

// ===================================================================Remove Card Btn 
let removeCardBtns = Array.from(document.getElementsByClassName("remove-card-btn"));
removeCardBtns.forEach(removeCardBtn => {
    removeCardBtn.addEventListener("click", () => {
        let cardId = removeCardBtn.dataset.cardId;
        modalAlert.style.display = "block";

        function getLinkById(id) {
            // Find the object containing the card with the specified id
            const foundCard = data
                .flatMap(category => category.subCategory)
                .flatMap(subCat => subCat.card)
                .find(card => card.id === id);
            if (foundCard) {
                // Retrieve the value of the "link" key
                const linkText = foundCard.link;
                return linkText;
            }
            return null; // Return null if the id is not found
        }
        const linkText = getLinkById(cardId);
        modalAlertText.innerText = "Do You Want to delete This card with link: " + linkText + " ?"


        queryModalBtns.forEach(modalBtn => {
            modalBtn.addEventListener("click", () => {
                if (modalBtn.id == btnModalYes.id) {
                    const updatedData = data.map(category => {
                        const updatedSubCategory = category.subCategory.map(subCat => {
                            const updatedCard = subCat.card.filter(card => card.id !== cardId);
                            return { ...subCat, card: updatedCard };
                        });
                        return { ...category, subCategory: updatedSubCategory };
                    });
                    data = updatedData;
                    save();
                    location.reload();
                    console.log("Card Deleted")
                } else if (modalBtn.id == btnModalNo.id) {
                    closeModalAlertBtn.click();
                    console.log("no Deleted Category")
                }
            });
        });
    });
});

// =================================================================================
// =================================================================================
// =================================================================================
// =============================Scroll to top when click on Selected Category button 
function scrollTopBtnClick(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// ===================================Interaction of left button Refrence to Category
const btnCategorys = Array.from(document.getElementsByClassName("btn_category"));
const categorySections = document.querySelectorAll(".category-section");
function catBtnAccordion() {
    btnCategorys.forEach(btnCategory => {
        btnCategory.addEventListener('click', (e) => {

            var activeCatBtn = document.getElementsByClassName("active-cat-btn");
            activeCatBtn[0].className = activeCatBtn[0].className.replace(" active-cat-btn", "");
            btnCategory.className += " active-cat-btn";
            let btnInrText = e.target.innerText.toLowerCase().replace(/\s+/g, '');
            scrollTopBtnClick(btnInrText);

            // if button value is all show all card and hide other
            categorySections.forEach(categorySection => {
                if (btnInrText == "all") {
                    categorySection.classList.remove("hide");
                    scrollTopBtnClick("css");
                } else if (categorySection.classList.contains(btnInrText)) {
                    categorySection.classList.remove("hide");
                    scrollTopBtnClick(btnInrText);
                } else {
                    categorySection.classList.add("hide");
                }
            });
        });
    });
} catBtnAccordion();


// ==============================Interaction of left button Refrence to Sub-Category  
const btnSubCategorys = Array.from(document.querySelectorAll(".btn_sub-category span"));
const subCategorySections = document.querySelectorAll(".sub-category-section");
let subCatBtn = null;
btnSubCategorys.forEach(btnSubCategory => {
    btnSubCategory.addEventListener('click', (e) => {

        var activeSubCatBtn = document.getElementsByClassName("active-sub-cat-btn");
        activeSubCatBtn[0].className = activeSubCatBtn[0].className.replace(" active-sub-cat-btn", "");
        btnSubCategory.className += " active-sub-cat-btn";

        // Get Btn inner html of selected Sub-Category Button
        let btnInrText = e.target.innerText.toLowerCase().replace(/\s+/g, '');
        scrollTopBtnClick(btnInrText);
    });
});


// ==================================================================================
// ==================================================================================
// ==================================================================================
// ========================================================Search Based filter cards
function filterProduct(value) {
    categorySections.forEach(categorySection => {

        if (value == "all") {
            categorySection.classList.remove("hide");
        }
        //  else {
        //     //Check if element contains category class
        //     if (card.classList.contains(value)) {
        //         //display element based on category
        //         card.classList.remove("hide");
        //     } else {
        //         //hide other elements
        //         card.classList.add("hide");
        //     }
        // }
    });
}
// ===============================================================Subscription Modal
let btnModalSubscription = document.getElementById("btn-modal-subscription");
btnModalSubscription.addEventListener("click", () => {
    modalSubscription.style.display = "block";
})

// ==============================================================Open Close Dropdown 
let dropdownMenu = document.querySelector("[data-dropdown-menu]");
let activeDropdownHeight = dropdownMenu.offsetHeight;
dropdownMenu.style.transform = "translateY( calc( .5rem - " + activeDropdownHeight + "px))";
function closeDropdownOnClickOutside() {
    document.addEventListener('click', function (event) {
        if (!dropdownMenu.contains(event.target) && event.target !== dropdownBtn) {
            dropdownMenu.style.transform = "translateY( calc( .5rem - " + activeDropdownHeight + "px))";
            dropdownMenu.classList.remove('active');
        }
    });
}
let dropdownBtn = document.querySelector("[data-dropdown-btn]");
dropdownBtn.addEventListener("click", () => {
    if (!dropdownMenu.classList.contains("active")) {
        dropdownMenu.classList.add("active");
        dropdownMenu.style.transform = "translateY( calc( -.5rem - " + activeDropdownHeight + "px))";
    } else {
        dropdownMenu.classList.remove("active");
        dropdownMenu.style.transform = "translateY( calc( .5rem - " + activeDropdownHeight + "px))";
    }
});

// ===================================================================Light Dark MODE 
const themeBtn = document.getElementById("theme-btn");
function themeChange() {
    if (themeBtn.checked === true) {
        document.body.classList.add("light-theme");
        // document.getElementById("logo").setAttribute("src","./images/logo/logo-light.svg")
    } else if (themeBtn.checked === false) {
        document.body.classList.remove("light-theme");
        // document.getElementById("logo").setAttribute("src","./images/logo/logo-dark.svg")
    }
} themeChange();
themeBtn.addEventListener("click", themeChange);

// ==============================================================Editable Mode Toggle
let editableModeBtn = document.getElementById("editable-mode-btn");
let editables = Array.from(document.getElementsByClassName("editable"));
function editableMode() {
    editables.forEach(editable => {
        if (editableModeBtn.checked === true) {
            editable.classList.remove("display-none");
        } else if (editableModeBtn.checked === false) {
            editable.classList.add("display-none");
        }
    });
} editableMode();
editableModeBtn.addEventListener("click", editableMode);


// ==========================================================Delete Data LocalStorage
let deleteDataBtn = document.getElementById("delete-data-btn");
deleteDataBtn.addEventListener("click", () => {
    modalAlert.style.display = "block";
    modalAlertText.innerText = "Do You Want to delete all the data?"

    queryModalBtns.forEach(modalBtn => {
        modalBtn.addEventListener("click", () => {
            if (modalBtn.id == btnModalYes.id) {
                localStorage.removeItem(LOCAL_STORAGE_DATA_KEY);
                location.reload();
                console.log("Data Deleted")
            } else if (modalBtn.id == btnModalNo.id) {
                closeModalAlertBtn.click();
                console.log("Data doesnt delete")
            }
        });
    });
});

// ============================================================ModalAlert Handeling
const modalAlert = document.getElementById("modal-alert");
const closeModalAlertBtn = document.getElementById("close-modal-alert-btn");
closeModalAlertBtn.onclick = function () {
    modalAlert.style.display = "none";
}

// ======================================================ModalSubscription Handeling
const modalSubscription = document.getElementById("modal-subscription");
const closeModalSubscriptionBtn = document.getElementById("close-modal-subscription-btn");
closeModalSubscriptionBtn.onclick = function () {
    modalSubscription.style.display = "none";
}
window.onclick = function (event) {
    closeDropdownOnClickOutside();
    if ((event.target == modalAlert) || (event.target == modalSubscription)) {
        modalSubscription.style.display = "none";
        modalAlert.style.display = "none";
    }
}

// ==============================================================Toggle Left Side Bar
// let aside = document.querySelector("main aside");
// let toggleAsideBtn = document.getElementById("toggle-aside-btn");
// toggleAsideBtn.addEventListener("click", () => {
//     aside.classList.toggle("d-block");
// })

// ==============================================================Clear Element Child
function clearElement(element, leaveElement) {
    while (element.children.length > leaveElement) {
        element.removeChild(element.lastChild);
    }
} // Passed


// Initially display all products
window.onload = () => {
    filterProduct("all");
    let firstSubCatBtn = document.querySelectorAll(".btn_sub-category");
    firstSubCatBtn[0].classList.add("active-sub-cat-btn");
};