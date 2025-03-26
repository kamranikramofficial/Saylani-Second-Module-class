const TodoApp = {
  todoText: null,
  todoList: null,
  focusedItem: null,
  todos: [], // Array to store todo data

  init() {
    this.todoText = document.getElementById("todoText");
    this.todoList = document.getElementById("todoList");
    this.loadTodos(); // Load todos from localStorage
    this.renderTodos(); // Render the loaded todos
    this.bindEvents();
  },

  bindEvents() {
    this.todoText.addEventListener("keydown", this.handleEnterKey.bind(this));

    document.addEventListener("keydown", this.handleInsertDeleteKeys.bind(this));

    this.todoList.addEventListener("click", (event) => {
      const li = event.target.closest("li");
      if (!li) return;

      if (event.target.classList.contains("edit")) {
        this.editTodo(li);
      } else if (event.target.classList.contains("del")) {
        this.deleteTodo(li);
      } else {
        this.focusItem(li);
      }
    });
  },

  handleEnterKey(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      this.add();
    }
  },

  handleInsertDeleteKeys(event) {
    if (!this.focusedItem) return;

    if (event.key === "Insert") {
      event.preventDefault();
      this.editTodo(this.focusedItem);
    } else if (event.key === "Delete") {
      event.preventDefault();
      this.deleteTodo(this.focusedItem);
    }
  },

  // Save todos to localStorage
  saveTodos() {
    localStorage.setItem("todos".value, JSON.stringify(this.todos));
  },

  // Load todos from localStorage
  loadTodos() {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos);
    }
  },

  // Render todos from the todos array
  renderTodos() {
    this.todoList.innerHTML = ""; // Clear the list
    
    this.todos.forEach(todo => {
      const li = document.createElement("li");
      li.dataset.id = todo.id; // Store the ID in the data attribute
      li.innerHTML = `
        <span class="todo-text">${todo.text}</span>
        <div>
          <button class="edit">Edit</button>
          <button class="del">Del</button>
        </div>
      `;
      li.tabIndex = 0;
      this.todoList.appendChild(li);
    });
  },

  add() {
    const todoValue = this.todoText.value.trim();
    if (todoValue === "") return;

    // Create a new todo object
    const newTodo = {
      id: Date.now(), // Use timestamp as unique ID
      text: todoValue
    };
    
    // Add to the todos array
    this.todos.push(newTodo);
    
    // Save to localStorage
    this.saveTodos();
    
    // Create and append the new list item
    const li = document.createElement("li");
    li.dataset.id = newTodo.id;
    li.innerHTML = `
      <span class="todo-text">${todoValue}</span>
      <div>
        <button class="edit">Edit</button>
        <button class="del">Del</button>
      </div>
    `;
    li.tabIndex = 0;

    this.todoList.appendChild(li);
    this.todoText.value = "";
    this.todoText.focus();
  },

  editTodo(li) {
    const todoId = parseInt(li.dataset.id);
    const todoTextSpan = li.querySelector(".todo-text");
    const currentText = todoTextSpan.textContent;

    const input = document.createElement("input");
    input.type = "text";
    input.value = currentText;
    input.className = "edit-input";
    input.style.width = "100%";
    input.style.padding = "0.25rem";
    input.style.marginRight = "0.5rem";

    todoTextSpan.replaceWith(input);
    input.focus();

    const saveEdit = () => {
      const newText = input.value.trim();
      const newSpan = document.createElement("span");
      newSpan.className = "todo-text";

      if (newText !== "") {
        newSpan.textContent = newText;
        
        // Update the todo in the array
        const todoIndex = this.todos.findIndex(todo => todo.id === todoId);
        if (todoIndex !== -1) {
          this.todos[todoIndex].text = newText;
          this.saveTodos(); // Save to localStorage
        }
      } else {
        newSpan.textContent = currentText;
      }

      input.replaceWith(newSpan);
      li.focus(); // Refocus the li after editing
    };

    input.addEventListener("blur", saveEdit);
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        saveEdit();
      }
    });
  },

  deleteTodo(li) {
    const todoId = parseInt(li.dataset.id);
    
    // Remove from the todos array
    this.todos = this.todos.filter(todo => todo.id !== todoId);
    
    // Save to localStorage
    this.saveTodos();
    
    this.fadeOutAndRemove(li);
    this.focusedItem = null;
  },

  fadeOutAndRemove(element) {
    element.style.animation = "fadeOut 0.5s ease forwards";

    setTimeout(() => {
      element.remove();
    }, 500);
  },

  focusItem(li) {
    if (this.focusedItem) {
      this.focusedItem.classList.remove("focused");
    }
    this.focusedItem = li;
    li.classList.add("focused");
    li.focus();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  TodoApp.init();
});