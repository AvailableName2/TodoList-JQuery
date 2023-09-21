function loadData() {
    //const data = await (await fetch("https://jsonplaceholder.typicode.com/todos")).json();
    const data = [
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false
        },
        {
          "userId": 1,
          "id": 3,
          "title": "fugiat veniam minus",
          "completed": false
        },
        {
          "userId": 1,
          "id": 4,
          "title": "et porro tempora",
          "completed": true
        },
        {
          "userId": 1,
          "id": 5,
          "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
          "completed": false
        },
        {
          "userId": 1,
          "id": 6,
          "title": "qui ullam ratione quibusdam voluptatem quia omnis",
          "completed": false
        },
        {
          "userId": 1,
          "id": 7,
          "title": "illo expedita consequatur quia in",
          "completed": false
        },
        {
          "userId": 1,
          "id": 8,
          "title": "quo adipisci enim quam ut ab",
          "completed": true
        },
        {
          "userId": 1,
          "id": 9,
          "title": "molestiae perspiciatis ipsa",
          "completed": false
        },
        {
          "userId": 1,
          "id": 10,
          "title": "illo est ratione doloremque quia maiores aut",
          "completed": true
        },
        {
          "userId": 1,
          "id": 11,
          "title": "vero rerum temporibus dolor",
          "completed": true
        },
        {
          "userId": 1,
          "id": 12,
          "title": "ipsa repellendus fugit nisi",
          "completed": true
        },
        {
          "userId": 1,
          "id": 13,
          "title": "et doloremque nulla",
          "completed": false
        },
        {
          "userId": 1,
          "id": 14,
          "title": "repellendus sunt dolores architecto voluptatum",
          "completed": true
        },
        {
          "userId": 1,
          "id": 15,
          "title": "ab voluptatum amet voluptas",
          "completed": true
        },
    ]

    return data;
}

const TODO_DATA = loadData();

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
    toggleButton.innerHTML = (todo["completed"])? ("Mark as not completed") : ("Mark as completed");

    $(toggleButton).on("click", (e) => {
        let targetTodo = $("#todo" + id);
        targetTodo.toggleClass("completed");
        TODO_DATA[id]["completed"] = !TODO_DATA[id]["completed"];
        console.log(TODO_DATA);

        let isTodoDeleted = targetTodo.classList;
        if (todoStatus.html() === "+") {
            todoStatus.html("-");
            $(e.target).html("Mark as not completed");
        } else if (todoStatus.html() === "-") {
            todoStatus.html("+");
            $(e.target).html("Mark as completed");
        }
    })

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("todoDelete");
    deleteButton.innerHTML = "Delete ToDo";

    $(deleteButton).on("click", (e) => {
        let targetTodo = $("#todo" + id);
        targetTodo.toggleClass("deleted");
        
        if (todoStatus.html() === "+") {
            todoStatus.html("-");
            $(e.target).html("");
        } else if (todoStatus.html() === "-") {
            todoStatus.html("+");
            $(e.target).html("Mark as completed");
        }
    })
    
    
    newTodo.append(toggleButton);

    target.append(newTodo);
}

async function loadTodos() {
    const todoList = document.createElement("div");
    todoList.setAttribute("id", "todoList");
    $("body").append(todoList);
    
    data = TODO_DATA;

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
