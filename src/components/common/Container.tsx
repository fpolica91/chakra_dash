import { Flex } from "@chakra-ui/react";
import {
  ReactElement,
  ReactNode,
} from "toasted-notes/node_modules/@types/react";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <Flex maxW={1480} w="100%" my="6" mx="auto" px="6">
      {children}
    </Flex>
  );
}
