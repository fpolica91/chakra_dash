import { Box, Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export default function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GENERAL">
          <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
          <NavLink icon={RiContactsLine}>Users</NavLink>
        </NavSection>
        <NavSection title="AUTOMATING">
          <NavLink icon={RiDashboardLine}>Records</NavLink>
          <NavLink icon={RiContactsLine}>Records</NavLink>
        </NavSection>
      </Stack>
    </Box>
  );
}
