
let newListForm = document.querySelector("[data-new-list-form]");
let newTaskForm = document.querySelector("[data-new-task-form]");
let newListInput = document.querySelector("[data-new-list-input]");
let newTaskInput = document.querySelector("[data-new-task-input]");
let listContainer = document.querySelector("[data-lists]");
let deleteListBtn = document.querySelector("[data-delete-list-btn]");
let clearCompleteTaskBtn = document.querySelector("[data-clear-complete-tasks-button]");
let tasksContainer = document.querySelector("[data-tasks]");
let listTitleElement = document.querySelector("[data-list-title]");
let listCountElement = document.querySelector("[data-list-count]");
let listDisplayConatiner = document.querySelector("[data-list-display-container]");


let taskTemplate = document.getElementById("task-template");

// creatimg Local Storage Key for Task List
const LOCAL_STORAGE_LIST_KEY = "task.lists";
// creatimg Local Storage VAlue Selected List
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = "task.selectedListId";

// Parseing the value with respect to key and Getting the value in js object
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
// Parseing the value of respected key
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);


// set the Selected-list-Id respect to selected li
listContainer.addEventListener("click", e => {
    if (e.target.tagName.toLowerCase() === "li") {
        selectedListId = e.target.dataset.listId;
        saveAndRender();
    }
});
tasksContainer.addEventListener("click", e => {
    if (e.target.tagName.toLowerCase() === "input") {
        const selectedList = lists.find(list => list.id === selectedListId) 
        const selectedTask = selectedList.tasks.find(task => task.id === e.target.id);
        selectedTask.complete = e.target.checked;
        save()
        renderTaskCount(selectedList)
    }
});



// Delete selected list
deleteListBtn.addEventListener("click", e => {
    // create new list which doesnot contain selectedListId 
    lists = lists.filter(list => list.id !== selectedListId)
    // remove activated selected-list-id  
    selectedListId = null;
    saveAndRender();
});

// Delete selected task
clearCompleteTaskBtn.addEventListener("click", (e)=>{
    let selectedList = lists.find(list => list.id === selectedListId);
    selectedList.tasks = selectedList.tasks.filter(task => !task.complete)
    saveAndRender();
})

// Add new list respect to input submittions
newListForm.addEventListener('submit', e => {
    e.preventDefault();
    // get input value of new list 
    const listName = newListInput.value
    // check input value is blank, if so Return
    if (listName == null || listName === "") return;
    // If not blank create list with that input
    const list = createList(listName);
    // after cteating list clear the input
    newListInput.value = null;
    // Add list to created lists array in local storage
    lists.push(list);
    // Save it and Render on screen
    saveAndRender();
});

// Add new list respect to input submittions
newTaskForm.addEventListener('submit', e => {
    e.preventDefault();
    // get input value of new Task
    const taskName = newTaskInput.value
    // check input value is blank, if so Return
    if (taskName == null || taskName === "") return;
    // If not blank create list with that input
    const task = createList(taskName);
    // after cteating list clear the input
    newTaskInput.value = null;
    // Add list to created lists array in local storage
    const selectedList = lists.find(list => list.id === selectedListId)
    selectedList.tasks.push(task);
    // Save it and Render on screen
    saveAndRender();
});
// Create list object with given Input
function createList(name) {
    return { id: Date.now().toString(), name: name, tasks: [] }
}
function createTask(name) {
    return { id: Date.now().toString(), name: name, complete: false }
}



// remove all the previous existing element 
function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
// create list refrence to list input 
function renderLists() {
    lists.forEach(list => {
        const listElem = document.createElement("li");
        listElem.classList.add("list-name");
        listElem.dataset.listId = list.id;
        listElem.innerText = list.name;
        // Select list by adding class to selected list
        if (list.id === selectedListId) {
            listElem.classList.add("active-list");
        }
        listContainer.appendChild(listElem);
    });
}
// Change remaining task count 
function renderTaskCount(selectedList) {
    let incompleteTaskCount = selectedList.tasks.filter(task => !task.complete).length;
    let taskString = incompleteTaskCount === 1 ? "task" : "tasks"
    listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`
}
// Create task list
function renderTasks(selectedList){
    selectedList.tasks.forEach(task =>{
        const taskElement = document.importNode(taskTemplate.content, true);
        const checkbox = taskElement.querySelector("input");
        checkbox.id = task.id;
        checkbox.checked =  task.complete;
        const label = taskElement.querySelector("label");
        label.htmlFor = task.id;
        label.append(task.name);
        tasksContainer.appendChild(taskElement);
    });
}
// Create task list
// function renderTasks(selectedList) {
//     selectedList.tasks.forEach(task => {
//         const taskElement = document.createElement("div");
//         taskElement.classList.add("task", "todo")
//         const checkbox = document.createElement("input");
//         checkbox.setAttribute("type", "checkbox");
//         checkbox.id = task.id;
//         checkbox.checked = task.complete;
//         const label = document.createElement("label");
//         label.setAttribute("for", task.id);
//         const spanElem = document.createElement("span");
//         spanElem.classList.add("custom-checkbox");
//         label.innerText = task.name;
//         label.appendChild(spanElem);
//         taskElement.appendChild(checkbox);
//         taskElement.appendChild(label);
//         tasksContainer.appendChild(taskElement);
//     });
// }

// render the screen 
function render() {
    // remove first Child of container 
    clearElement(listContainer);
    // render list to list container
    renderLists();
    // select list refrence to selected-list-id
    const selectedList = lists.find(list => list.id === selectedListId);
    // display none if nothing Selected
    if (selectedListId == null) {
        listDisplayConatiner.style.display = "none";
    } else {
        listDisplayConatiner.style.display = "";
        listTitleElement.innerText = selectedList.name
        renderTaskCount(selectedList);
        clearElement(tasksContainer);
        renderTasks(selectedList);
    }
}




// Save changes
function save() {
    // set the changed value to the list array of respected localStorage key
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
    // set 
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId)
}
// Save Changes and render on screen
function saveAndRender() {
    save();
    render();
}
render();