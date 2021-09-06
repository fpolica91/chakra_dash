import type { NextPage } from "next";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/Form/Input";
import { Flex, Button, Stack } from "@chakra-ui/react";

type SignInFormData = {
  email: string;
  password: string;
};

const Home: NextPage = () => {
  const { register, handleSubmit, formState } = useForm();

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <Flex w="100vw" h="100vh" justify="center" align="center">
      <Flex
        as="form"
        width="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            // name="email"
            type="email"
            label="Email"
            {...register("email")}
          />
          <Input
            // name="password"
            type="password"
            label="Password"
            {...register("password")}
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          size="lg"
          colorScheme="pink"
          isLoading={formState.isSubmitting}
        >
          Enter
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
