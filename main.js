// selectors
var todoInput = document.querySelector(".main-todo-input");
var todoButton = document.querySelector(".main-todo-button");
var todoList = document.querySelector(".main-todo-list");

// Listeners
todoButton.addEventListener('click', addTodoElement);

// function "addElement"
function addTodoElement(event) {
    event.preventDefault();

    // create  new <div>
    var todoDiv = document.createElement("div");
    todoDiv.classList.add("main-todo-element-wrapper");

    // create new <li>
    var todoLi = document.createElement("li");
    todoLi.innerText = todoInput.value;
    todoLi.classList.add("main-todo-element-wrapper-text")
    todoDiv.appendChild(todoLi);
    
    // create delete button
    var todoButtonDelete = document.createElement("button");
    todoButtonDelete.classList.add("main-todo-element-wrapper-delete");
    todoButtonDelete.innerHTML = "<i class='fa-solid fa-trash'></i>";
    todoButtonDelete.addEventListener('click', deleteElement);
    todoDiv.appendChild(todoButtonDelete);
    
    // create check button
    var todoButtonCheck = document.createElement("button");
    todoButtonCheck.classList.add("main-todo-element-wrapper-check");
    todoButtonCheck.innerHTML = '<i class="fa-solid fa-check"></i>';
    todoButtonCheck.addEventListener('click', checkElement)
    todoDiv.appendChild(todoButtonCheck);

    // add <div> to <ul>
    todoList.appendChild(todoDiv);
    todoInput.value = "";
}

// function "deleteElement"
function deleteElement(e) {
    let cibleDelete = e.target.parentNode.parentNode;
    cibleDelete.remove();
}

// function "checkElement"
function checkElement(evt) {
    let cibleCheck = evt.target.parentNode.parentNode;
    cibleCheck.classList.add("checked");
}
