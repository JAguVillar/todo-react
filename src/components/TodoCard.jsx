import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Heading,
  Stack,
  Box,
  StackDivider,
  Button,
  Tag,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

import styles from "./styles/TodoCard.module.css";

export default function TodoCard({ id, tarea, descripcion, fecha, onDelete }) {
  function removeTodo(id) {
    console.log(id);

    onDelete(id);
  }

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      variant={"filled"}
      size={"sm"}
    >
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              {tarea}
            </Heading>
            {descripcion && (
              <Text pt="2" fontSize="sm">
                {descripcion}
              </Text>
            )}
          </Box>
        </Stack>
      </CardBody>
      <CardBody className={styles.boton}>
        <Box>
          <Button
            onClick={() => {
              removeTodo(id);
            }}
            colorScheme="red"
            variant={"outline"}
            leftIcon={<DeleteIcon />}
            size={"sm"}
          >
            Eliminar
          </Button>
        </Box>
      </CardBody>
    </Card>
  );
}
