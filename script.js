document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const deadlineInput = document.getElementById("deadline");
    const priorityInput = document.getElementById("priority");
    const labelInput = document.getElementById("label");
    const addTaskButton = document.getElementById("addTask");
    const tasksContainer = document.getElementById("tasks");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value;
        const deadline = deadlineInput.value;
        const priority = priorityInput.value;
        const label = labelInput.value;


        if (taskText.trim() === "") {
            alert("Please enter a task description.");
            return;
        }

        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.innerHTML = `
            <label>${taskText}</label>
            <span>Deadline: ${deadline}</span>
            <span>Priority: ${priority}</span>
            <span>Label: ${label}</span>
            <button>Delete</button>
        `;

        tasksContainer.appendChild(taskElement);

        // Clear input fields
        taskInput.value = "";
        deadlineInput.value = "";
        priorityInput.value = "high";
        labelInput.value = "";

        // Add event listener for deleting tasks
        const deleteButton = taskElement.querySelector("button");
        deleteButton.addEventListener("click", function () {
            tasksContainer.removeChild(taskElement);
        });
    });
});
