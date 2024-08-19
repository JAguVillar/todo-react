import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Stack,
  Box,
  StackDivider,
} from "@chakra-ui/react";
import ComponentInput from "./components/ComponentInput";
export default function App() {
  return (
    <>
      <ComponentInput />
      <Card>
        <CardHeader>
          <Heading size="md">Client Report</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Summary
              </Heading>
              <Text pt="2" fontSize="sm">
                View a summary of all your clients over the last month.
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
