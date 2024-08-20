import { Stack, Container, useToast, Heading, filter } from "@chakra-ui/react";
import TodoInput from "./components/TodoInput";
import TodoCard from "./components/TodoCard";
import { useEffect, useState } from "react";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const toast = useToast();

  function agregarTodo(tarea, descripcion) {
    console.log(tarea, descripcion);

    setTodos((todosActuales) => {
      return [
        ...todosActuales,
        {
          id: crypto.randomUUID(),
          tarea: tarea,
          descripcion: descripcion ? descripcion : "",
          fecha: new Date(),
        },
      ];
    });
    openToast(tarea);
  }

  function eliminarTodo(id) {
    setTodos((todosActuales) => {
      return todosActuales.filter((todo) => todo.id != id);
    });
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  function openToast(tarea) {
    toast({
      title: "Tarea agregada.",
      description: `Se agregó la tarea: ${tarea}`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  }

  return (
    <Container>
      <Stack>
        <TodoInput onSubmit={agregarTodo} />
        <Stack>
          <Heading size="xs" textTransform="uppercase">
            Tareas: {todos.length}
          </Heading>
          {todos.map((item) => {
            return <TodoCard onDelete={eliminarTodo} key={item.id} {...item} />;
          })}
        </Stack>
      </Stack>
    </Container>
  );
}
