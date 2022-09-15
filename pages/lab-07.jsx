import { useEffect, useState } from "react";
import Todo from "../components/Todolist";
import Mainlyout from "../Layout/Mainlyout";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
  IconSunHigh,
} from "@tabler/icons";

export default function Home() {
  let p = 0;
  let c = 0;
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todosStr = localStorage.getItem("react-todos");
    if (todosStr === null) setTodos([]);
    else setTodos(JSON.parse(todosStr));
  }, []);

  const saveTodos = () => {
    const todosStr = JSON.stringify(todos);
    localStorage.setItem("react-todos", todosStr);
  };

  const [isFirstRun, setisFirstRun] = useState(true);
  useEffect(() => {
    if (isFirstRun) {
      setisFirstRun(false);
      return;
    }
    saveTodos();
  }, [todos]);

  const addTodo = () => {
    const newTodos = [{ title: todoInput, state: false }, ...todos];
    setTodos(newTodos);
    setTodoInput("");
  };

  const emtpyTodo = () => {
    alert("Todo cannot be empty");
  };

  const status = () => {
    todos.map((todo) => {
      if (todo.state === false) {
        p = p + 1;
      } else if (todo.state === true) {
        c = c + 1;
      }
    });
  };

  const deleteTodo = (idx) => {
    todos.splice(idx, 1);
    const newTodos = [...todos];
    setTodos(newTodos);
  };

  const markTodo = (idx) => {
    todos[idx].state = !todos[idx].state;
    setTodos([...todos]);
  };

  return (
    <Mainlyout>
      <div>
        {/* Entire App container (required for centering) */}
        <div style={{ maxWidth: "700px" }} className="mx-auto">
          {/* App header */}
          <p className="display-4 text-center fst-italic m-4">
            Minimal Todo List <span className="fst-normal">☑️</span>
          </p>
          {/* Input */}
          <input
            onChange={(event) => {
              setTodoInput(event.target.value);
            }}
            value={todoInput}
            className="form-control mb-1 fs-4"
            placeholder="insert todo here..."
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                if (todoInput !== "") {
                  return addTodo();
                } else if (todoInput === "") {
                  return emtpyTodo();
                }
              }
            }}
          />

          {/* Todos */}
          <ul>
            {todos.map((todo, i) => (
              <Todo
                title={todo.title}
                key={i}
                completed={todo.state}
                onDelete={() => deleteTodo(i)}
                onMark={() => markTodo(i)}
              />
            ))}
          </ul>
          {status()}

          {/* summary section */}
          <p className="text-center fs-4">
            <span className="text-primary">
              All {"(" + todos.length + ")"}{" "}
            </span>
            <span className="text-warning">Pending {"(" + p + ")"} </span>
            <span className="text-success">Completed {"(" + c + ")"} </span>
          </p>

          {/* Made by section */}
          <p className="text-center mt-3 text-muted fst-italic">
            made by Natsuphat Thaumpan 640612184
          </p>
        </div>
      </div>
    </Mainlyout>
  );
}
