import { Flex } from "@chakra-ui/react";
import { Profile } from "./Header/Profile";
import { Logo } from "./Header/Logo";
import { Notifications } from "./Header/Notifications";
import { SearchBox } from "./Header/SearchBox";

export function Header() {
  return (
    <Flex
      w="100%"
      as="header"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />

      <SearchBox />

      <Flex align="center" ml="auto">
        <Notifications />
        <Profile />
      </Flex>
    </Flex>
  );
}
