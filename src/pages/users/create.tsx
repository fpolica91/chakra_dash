import {
  Box,
  Heading,
  Divider,
  VStack,
  SimpleGrid,
  Flex,
  HStack,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

import { Container as DefaultContainer } from "../../components/common/Container";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function CreateUser() {
  return (
    <Box>
      <Header />
      <DefaultContainer>
        <Sidebar />
        <Box flex="1" bg="gray.800" p={["6", "8"]} borderRadius={8}>
          <Heading fontWeight="normal" size="lg">
            Create User
          </Heading>
          <Divider color="gray.700" my="6" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="name" label="Full name" type="text" />
              <Input name="email" label="E-mail" type="email" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="password" label="Password" type="password" />
              <Input
                name="password"
                label="Password Confirmation"
                type="password"
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancel
                </Button>
              </Link>
              <Button colorScheme="pink">Save</Button>
            </HStack>
          </Flex>
        </Box>
      </DefaultContainer>
    </Box>
  );
}
