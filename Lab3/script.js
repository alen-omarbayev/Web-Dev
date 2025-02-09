document.addEventListener("DOMContentLoaded", function() {
    let addButton = document.getElementById("addTask");
    let taskInput = document.getElementById("newTask");
    let taskList = document.querySelector(".task-list");

    function addTask(taskText) {
        let taskBlock = document.createElement("div");
        taskBlock.classList.add("task-block");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        let taskParagraph = document.createElement("p");
        taskParagraph.textContent = taskText;

        let deleteButton = document.createElement("button");
        let deleteImage = document.createElement("img");
        deleteImage.src = "images/delete.png";
        deleteImage.alt = "trash";
        deleteButton.appendChild(deleteImage);

        taskBlock.appendChild(checkbox);
        taskBlock.appendChild(taskParagraph);
        taskBlock.appendChild(deleteButton);

        taskList.appendChild(taskBlock);
        taskInput.value = "";

        checkbox.addEventListener("change", function() {
            taskParagraph.style.textDecoration = this.checked ? "line-through" : "none";
        });

        deleteButton.addEventListener("click", function() {
            taskList.removeChild(taskBlock);
        });
    }

    addButton.addEventListener("click", function() {
        let taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task before adding.");
            return;
        }
        addTask(taskText);
    });

    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addButton.click();
        }
    });

    // for first item
    let existingTaskBlock = document.getElementById("task-block");
    if (existingTaskBlock) {
        let deleteButton = existingTaskBlock.querySelector("button");
        deleteButton.addEventListener("click", function() {
            existingTaskBlock.remove();
        });
    }
});
