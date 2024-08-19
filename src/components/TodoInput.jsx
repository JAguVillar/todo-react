import { Input } from "@chakra-ui/react";
import { useState } from "react";

export default function ComponentInput({ onSubmit }) {
  const [newTodo, setNewTodo] = useState("");

  function handleSubmit(e) {
    if (newTodo != "") {
      e.preventDefault();
      onSubmit(newTodo);
      setNewTodo("");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Tarea"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </form>
    </>
  );
}
