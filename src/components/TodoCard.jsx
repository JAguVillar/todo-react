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
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

import styles from "./styles/TodoCard.module.css";

export default function TodoCard({ titulo }) {
  return (
    <Card direction={{ base: "column", sm: "row" }} variant={"filled"}>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Text pt="2" fontSize="sm">
              {titulo}
            </Text>
          </Box>
        </Stack>
      </CardBody>
      <CardBody className={styles.boton}>
        <Box>
          <Button
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
