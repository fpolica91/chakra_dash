import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Fabricio Policarpo</Text>
        <Text color="gray.300">fabriciopolicarpo@gmail.com</Text>
      </Box>
      <Avatar size="md" name="Fabricio Policarpo" />
    </Flex>
  );
}
