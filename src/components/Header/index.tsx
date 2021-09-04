import { Flex, useBreakpointValue, IconButton, Icon } from "@chakra-ui/react";
import { Profile } from "./Profile";
import { Logo } from "./Logo";
import { Notifications } from "./Notifications";
import { SearchBox } from "./SearchBox";
import { useSidbarDrawer } from "../../context/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

export function Header() {
  const { onOpen } = useSidbarDrawer();
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
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
      {!isDesktop && (
        <IconButton
          icon={<Icon as={RiMenuLine} />}
          variant="unstyled"
          fontSize="24"
          onClick={onOpen}
          aria-label="Open sidebar"
          mr="2"
        ></IconButton>
      )}
      <Logo />

      {isDesktop && <SearchBox />}

      <Flex align="center" ml="auto">
        <Notifications />
        <Profile showProfileData={isDesktop} />
      </Flex>
    </Flex>
  );
}
