import { Td, Tr, Checkbox, Text, Box, Button, Icon } from "@chakra-ui/react";
import { RiPencilLine } from "react-icons/ri";

interface RowProps {
  name: string;
  email: string;
  isDesktop?: boolean;
  date: string;
}

export function Row({ name, email, date, isDesktop = true }: RowProps) {
  return (
    <Tr>
      <Td px={["4", "4", "6"]}>
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
      {isDesktop && <Td>{date}</Td>}
      {isDesktop && (
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
      )}
    </Tr>
  );
}
