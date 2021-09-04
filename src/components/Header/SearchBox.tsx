import { RiSearchLine } from "react-icons/ri";
import { Flex, Input, Icon } from "@chakra-ui/react";

export function SearchBox() {
  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      bg="gray.800"
      position="relative"
      borderRadius="full"
    >
      <Input
        variant="unstyled"
        color="gray.50"
        placeholder="search"
        px="4"
        mr="4"
        _placeholder={{ color: "gray.400" }}
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
