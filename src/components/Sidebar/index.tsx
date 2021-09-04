import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import { useSidbarDrawer } from "../../context/SidebarDrawerContext";
import { SidebarItem } from "./SidebarItem";

export default function Sidebar() {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });
  const { onClose, isOpen } = useSidbarDrawer();

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navigation</DrawerHeader>
            <DrawerBody>
              <SidebarItem />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }
  return (
    <Box as="aside" w="64" mr="8">
      <SidebarItem />
    </Box>
  );
}
