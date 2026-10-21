import { useReducer, useState } from "react";
import { toast } from "react-toastify";

const initialTodos = [
  { id: 1, text: "Learn HTML CSS and JavaScript", completed: true },
  { id: 2, text: "Learn React", completed: false },
  {
    id: 3,
    text: "Create Projects ",
    completed: false,
  },
  { id: 4, text: "Upload on Github", completed: false },
  { id: 5, text: "Create Protfolio Website", completed: true },
  { id: 6, text: "Create Resume", completed: false },
  { id: 7, text: "Apply for Job", completed: false },
];

function reducer(todos, action) {
  if (action.type === "ADD") {
    return [
      ...todos,
      {
        id: Date.now(),
        text: action.text,
        completed: false,
      },
    ];
  }

  if (action.type === "REMOVE") {
    return todos.filter((todo) => todo.id !== action.id);
  }

  if (action.type === "TOGGLE") {
    return todos.map((todo) => {
      if (todo.id === action.id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }

      return todo;
    });
  }

  return todos;
}

function TodoList() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const [input, setInput] = useState("");

  function addTodo() {
    if (input.trim() === "") {
      toast.error("Please enter a todo item");
      return;
    }

    dispatch({
      type: "ADD",
      text: input,
    });

    toast.success("Todo added successfully!");

    setInput("");
  }

  function removeTodo(id) {
    dispatch({
      type: "REMOVE",
      id: id,
    });

    toast.success("Todo removed successfully!");
  }

  function toggleTodo(id) {
    dispatch({
      type: "TOGGLE",
      id: id,
    });

    toast.info("Todo status updated!");
  }

  return (
    <div className="container mt-5">
      <div className="card mx-auto todo-card">
        <div className="card-body">
          <h4 className="mb-4">Todo List</h4>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter list item name"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <button
              className="btn btn-outline-secondary"
              onClick={addTodo}
            >
              Add Todo Item
            </button>
          </div>

          {todos.length === 0 ? (
            <p className="text-center text-muted mt-4">
              No elements in the list
            </p>
          ) : (
            todos.map((todo) => (
              <div
                key={todo.id}
                className="todo-item d-flex justify-content-between align-items-center border-bottom py-2"
              >
                <div
                  className="d-flex align-items-center"
                  onClick={() => toggleTodo(todo.id)}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  {todo.completed ? (
                    <i className="bi bi-check-circle-fill text-success"></i>
                  ) : (
                    <i className="bi bi-circle"></i>
                  )}

                  <span
                    className={
                      todo.completed
                        ? "ms-2 text-decoration-line-through"
                        : "ms-2"
                    }
                  >
                    {todo.text}
                  </span>
                </div>

                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => removeTodo(todo.id)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoList;