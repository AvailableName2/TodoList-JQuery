function addTodo(todo, target, id) {
    const newTodo = document.createElement("div");
    newTodo.classList.add("todo");
    $(newTodo).attr("id", "todo" + id);

    const title = document.createElement("h2");
    title.classList.add("todoTitle");
    title.innerHTML = todo["id"] + " " + todo["title"];
    newTodo.append(title);

    const status = document.createElement("text");
    status.classList.add("todoStatus");
    status.innerHTML = (todo["completed"] === true) ? "+" : "-";
    if (todo["completed"]) newTodo.classList.add("completed");
    newTodo.append(status);

    const toggleButton = document.createElement("button");
    toggleButton.classList.add("todoToggle");
    toggleButton.innerHTML = "Toggle!";
    $(toggleButton).on("click", () => {
        let targetTodo = $("#todo" + id);
        targetTodo.toggleClass("completed");

        let todoStatus = $(".todoStatus", targetTodo);
        if (todoStatus.html() === "+") {
            todoStatus.html("-");
        } else if (todoStatus.html() === "-") {
            todoStatus.html("+");
        }
    })
    
    newTodo.append(toggleButton);

    target.append(newTodo);
}

async function loadTodos() {
    const todoList = document.createElement("div");
    todoList.setAttribute("id", "todoList");
    $("body").append(todoList);
    
    const data = await (await fetch("https://jsonplaceholder.typicode.com/todos")).json();
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            addTodo(data[i], $("#todoList"), i);
        })
    }
}

async function main() {
    await loadTodos();

}

main();
