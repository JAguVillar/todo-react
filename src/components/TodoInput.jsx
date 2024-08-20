import {
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Flex,
  IconButton,
  Spacer,
  Stack,
  HStack,
  Tooltip,
  Textarea,
} from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";

import { useState } from "react";

export default function ComponentInput({ onSubmit }) {
  const [newTodo, setNewTodo] = useState("");
  const [newTodoDescripcion, setNewTodoDescripcion] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleSubmit(e) {
    if (newTodo != "") {
      e.preventDefault();
      onSubmit(newTodo);
      setNewTodo("");
      setNewTodoDescripcion("");
    }
  }

  function handleClick(e) {
    if (newTodo != "" && newTodoDescripcion != "") {
      e.preventDefault();
      onSubmit(newTodo, newTodoDescripcion);
      setNewTodo("");
      setNewTodoDescripcion("");
      onClose;
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <HStack>
          <Input
            placeholder="Tarea rápida"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <Tooltip label="Crear tarea completa" aria-label="A tooltip">
            <IconButton onClick={onOpen} icon={<PlusSquareIcon />} />
          </Tooltip>
        </HStack>
      </form>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Crear tarea</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <Input
                placeholder="Tarea"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
              />
              <Textarea
                placeholder="Descripción"
                value={newTodoDescripcion}
                onChange={(e) => setNewTodoDescripcion(e.target.value)}
              />
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={(e) => {
                handleClick(e);
                onClose();
              }}
            >
              Crear tarea
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
