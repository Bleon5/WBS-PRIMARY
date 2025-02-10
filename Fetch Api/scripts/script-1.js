fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((response) => response.json())
  .then((todos) => {
    const todoList = document.querySelector("#todo-list");

    todos.map((todo) => {
      const todoItem = document.createElement("div");
      todoItem.textContent = todo.title;
      todoItem.classList.add("todo-item");

      if (todo.completed) {
        todoItem.style.textDecoration = "line-through"; // Fixed typo
        todoItem.style.color = "green";
      } else {
        todoItem.style.color = "red";
      }

      todoList.appendChild(todoItem);
    });
  })
  .catch((error) => console.error("Error fetching todos:", error));
