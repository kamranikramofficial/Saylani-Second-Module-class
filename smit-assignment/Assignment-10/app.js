const TodoApp = {
  todoText: null,
  todoList: null,
  focusedItem: null,

  init() {
    this.todoText = document.getElementById("todoText");
    this.todoList = document.getElementById("todoList");
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

  add() {
    const todoValue = this.todoText.value.trim();
    if (todoValue === "") return;

    const li = document.createElement("li");
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
