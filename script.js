function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input === "") {
        alert("Please enter a task.");
        return;
    }
    var listItem = document.createElement("li");
    listItem.innerHTML = '<input type="checkbox">' + input + '<button onclick="deleteTask(this)">Delete</button>';
    document.getElementById("taskList").appendChild(listItem);
    document.getElementById("taskInput").value = "";
}

function deleteTask(item) {
    item.parentNode.remove();
}
