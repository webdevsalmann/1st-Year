
let noteTitle = document.getElementById("note-title");
let noteTitleElements = Array.from(document.getElementsByClassName("note-title"));
let noteDescription = document.getElementById("note-description");
let noteDescriptionElements = Array.from(document.getElementsByClassName("note-description"));
const btnAdd = document.getElementById("btn-add");
const displayCardContainer = document.getElementById("display-card-container");

const LOCAL_STORAGE_NOTE_KEY = "note.note";
const LOCAL_STORAGE_SELECTED_NOTE_ID_KEY = "note.selectedNoteId";

// Parseing the value with respect to key and Getting the value in js object
let notes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NOTE_KEY)) || [];
// Parseing the value of respected key
let selectedNoteId = localStorage.getItem(LOCAL_STORAGE_SELECTED_NOTE_ID_KEY);

// let noteees = [
//     {
//         id: 324234,
//         title: Title,
//         description: Description
//     }
// ]

// Add note to Create note Object function + Reset default note behaviour
btnAdd.addEventListener("click", (e) => {
    let noteTitleValue = document.getElementById("note-title").innerText;
    let noteDescriptionValue = document.getElementById("note-description").innerText;
    if ((noteTitleValue == null || noteTitleValue === "") && (noteDescriptionValue == null || noteDescriptionValue === "")) return;
    const note = createNote(noteTitleValue, noteDescriptionValue);
    defaultNote();
    notes.push(note);
    saveAndRender();
}); // Passed
function createNote(title, description) {
    return { id: Date.now().toString(), title: title, description: description }
} // Passed
function defaultNote() {
    noteTitle.innerText = "";
    noteDescription.innerText = "";
} // Passed

// Create a function which will save content if we move our focus our of the box
// noteTitleElements.forEach(titleElem => {
//     titleElem.addEventListener("click", () => {
//         console.log("object")
//     })
// })



function saveContent(noteId) {
    let focusNote = notes.find(note => note.id == noteId);
    // Save Title on change
    let selectedTitleValue = document.querySelector(`[data-title-id='${noteId}']`).innerText;
    focusNote.title = selectedTitleValue;

    // Save description on change
    let selectedDescriptionValue = document.querySelector(`[data-description-id='${noteId}']`).innerText;
    focusNote.description = selectedDescriptionValue;
    save();
}


function render() {
    clearElement(displayCardContainer);
    renderCard();
} // Passed
function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
} // Passed
function renderCard() {
    notes.forEach(note => {
        // Creating card
        let card = document.createElement("div");
        card.classList.add("card");

        // Creating card-heading
        let cardHeading = document.createElement("div");
        cardHeading.classList.add("card-heading")
        // create note-heading 
        let noteTitle = document.createElement("div");
        // noteTitle.classList.add("note-title")
        noteTitle.className = "note-title";
        noteTitle.dataset.titleId = note.id;
        // notHeading.setAttribute("id", "title-input");
        noteTitle.setAttribute("aria-label", "Title");
        noteTitle.setAttribute("onKeydown", `saveContent(${note.id})`);
        // noteHeading.setAttribute("tabindex", "1");
        noteTitle.setAttribute("role", "textbox");
        noteTitle.setAttribute("dir", "ltr");
        noteTitle.setAttribute("data-placeholder", "Title");
        noteTitle.setAttribute("aria-multiline", "true");
        noteTitle.setAttribute("contenteditable", "true");
        // noteTitle.setAttribute("placeholder", "Title")
        noteTitle.innerText = note.title;
        // Appending element to cardHeading
        cardHeading.appendChild(noteTitle);
        
        // Creating card-body
        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body")
        // create description input 
        let noteDescription = document.createElement("div");
        noteDescription.classList.add("note-description");
        noteDescription.dataset.descriptionId = note.id;
        noteDescription.setAttribute("onKeydown", `saveContent(${note.id})`);
        // noteDescription.setAttribute("id", "description-input");
        noteDescription.setAttribute("aria-label", "Description");
        // noteDescription.setAttribute("tabindex", "2");
        noteDescription.setAttribute("role", "textbox");
        noteDescription.setAttribute("dir", "ltr");
        noteDescription.setAttribute("data-placeholder", "Description");
        noteDescription.setAttribute("aria-multiline", "true");
        noteDescription.setAttribute("contenteditable", "true");
        // descriptionInput.setAttribute("placeholder", "Take a note...")
        noteDescription.innerText = note.description;
        // appending Element to descriptionBox
        cardBody.appendChild(noteDescription);
        
        
        // Creating card-body
        let btnBox = document.createElement("div");
        btnBox.classList.add("btn-box");
        // create description input 
        let btn = document.createElement("button");
        btn.classList.add("btn");
        // btn.dataset.noteId = note.id;
        btn.setAttribute("id", note.id);
        btn.dataset.removeId = note.id;
        btn.innerText = "Remove";
        btnBox.appendChild(btn);

        card.appendChild(cardHeading);
        card.appendChild(cardBody);
        card.appendChild(btnBox);
        displayCardContainer.appendChild(card);
    })
} // Passed



// remove note card 
displayCardContainer.addEventListener("click", e => {
    if (e.target.tagName.toLowerCase() === "button") {
        selectedNoteId = e.target.dataset.removeId;
        notes = notes.filter(note => note.id !== selectedNoteId);
        saveAndRender();
    }
}); // Passed
function saveAndRender() {
    save();
    render();
} // Passed
function save() {
    localStorage.setItem(LOCAL_STORAGE_NOTE_KEY, JSON.stringify(notes));
    localStorage.setItem(LOCAL_STORAGE_SELECTED_NOTE_ID_KEY, selectedNoteId);
} // Passed
render()

function deleteDataBase() {
    localStorage.removeItem("note.note");
    localStorage.removeItem("note.selectedNoteId");
}
// deleteDataBase()















// Event Listners for better UX
noteDescriptionElements.forEach(descElem =>{
    descElem.addEventListener("keydown",(e)=>{
        if ((e.key == "Enter") && e.ctrlKey){
            btnAdd.click();
        }
    })
})