import TodoContext from "./TodoContext";
import { useEffect, useState } from "react";

const TODOS = "todos";

export function TodoProvider({ children }) {
  
  const savedTodos = localStorage.getItem(TODOS);

  const [todos, setTodos] = useState(savedTodos ? JSON.parse(savedTodos) : []);

  useEffect(() => {
    localStorage.setItem(TODOS, JSON.stringify(todos));
  }, [todos]);

  const addToDO = (formData) => {
    const description = formData.get("description");
    setTodos((prevStates) => {
      const newToDo = {
        id: prevStates.length + 1,
        description: description,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      return [...prevStates, newToDo];
    });
  };

  const toggleTodoCompleted = (todo) => {
    setTodos((prevStates) => {
      return prevStates.map((t) => {
        if (t.id === todo.id) {
          return { ...t, completed: !t.completed };
        }
        return t;
      });
    });
  };

  const removeToDo = (todo) => {
    setTodos((prevStates) => {
      return prevStates.filter((t) => t.id !== todo.id);
    });
  };

  return (
    <TodoContext
      value={{
        todos,
        addToDO,
        toggleTodoCompleted,
        removeToDo,
      }}
    >
      {children}
    </TodoContext>
  );
}

export default TodoProvider;
