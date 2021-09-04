import { Td, Tr, Checkbox, Text, Box, Button, Icon } from "@chakra-ui/react";
import { RiPencilLine } from "react-icons/ri";

interface RowProps {
  name: string;
  email: string;
  date: string;
}

export function Row({ name, email, date }: RowProps) {
  return (
    <Tr>
      <Td px="6">
        <Checkbox colorScheme="pink" />
      </Td>
      <Td>
        <Box>
          <Text fontWeight="bold">{name}</Text>
          <Text fontSize="sm" color="gray.300">
            {email}
          </Text>
        </Box>
      </Td>
      <Td>{date}</Td>
      <Td>
        <Button
          as="a"
          size="sm"
          fontSize="sm"
          colorScheme="pink"
          leftIcon={<Icon as={RiPencilLine} />}
        >
          Edit
        </Button>
      </Td>
    </Tr>
  );
}
