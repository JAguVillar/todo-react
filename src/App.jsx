import { Stack } from "@chakra-ui/react";
import TodoInput from "./components/TodoInput";
import TodoCard from "./components/TodoCard";
import { useEffect, useState } from "react";
export default function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  function agregarTodo(tarea) {
    console.log(tarea);
    setTodos((todosActuales) => {
      console.log(todosActuales);
      return [...todosActuales, { id: crypto.randomUUID(), tarea: tarea }];
    });
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  return (
    <>
      <TodoInput onSubmit={agregarTodo} />
      <Stack>
        {todos.map((item) => {
          return <TodoCard key={item.id} titulo={item.tarea} />;
        })}
      </Stack>
    </>
  );
}
