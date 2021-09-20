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
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import { Container as DefaultContainer } from "../../components/common/Container";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import Sidebar from "../../components/Sidebar";

type CreateUserData = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  passwordConfirmation: yup
    .string()
    .oneOf(
      [null, yup.ref("password")],
      "Password confirmation does not match password"
    ),
});

export default function CreateUser() {
  const { register, formState, handleSubmit } = useForm<CreateUserData>({
    resolver: yupResolver(schema) as any,
  });

  const handleCreate: SubmitHandler<CreateUserData> = (values) => {
    console.log("created", values);
  };

  return (
    <Box>
      <Header />
      <DefaultContainer>
        <Sidebar />
        <Box
          flex="1"
          bg="gray.800"
          p={["6", "8"]}
          borderRadius={8}
          as="form"
          onSubmit={handleSubmit(handleCreate)}
        >
          <Heading fontWeight="normal" size="lg">
            Create User
          </Heading>
          <Divider color="gray.700" my="6" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                label="Full name"
                type="text"
                {...register("name")}
                error={formState.errors.name}
              />
              <Input
                label="E-mail"
                type="email"
                {...register("email")}
                error={formState.errors.email}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                label="Password"
                type="password"
                error={formState.errors.password}
                {...register("password")}
              />
              <Input
                label="Password Confirmation"
                type="password"
                error={formState.errors.passwordConfirmation}
                {...register("passwordConfirmation")}
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
              <Button colorScheme="pink" type="submit">
                Save
              </Button>
            </HStack>
          </Flex>
        </Box>
      </DefaultContainer>
    </Box>
  );
}
