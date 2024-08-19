import { Input } from "@chakra-ui/react";
import { useState } from "react";

export default function ComponentInput() {
  const [newTodo, setNewTodo] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log("hola");
    setNewTodo("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Tarea"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        {newTodo}
      </form>
    </>
  );
}
