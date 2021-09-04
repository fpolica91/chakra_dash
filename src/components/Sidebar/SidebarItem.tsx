import { Stack } from "@chakra-ui/react";
import {
  RiDashboardLine,
  RiContactsLine,
  RiInputMethodLine,
  RiGitMergeLine,
} from "react-icons/ri";
import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";

export function SidebarItem() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GENERAL">
        <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
        <NavLink icon={RiContactsLine}>Users</NavLink>
      </NavSection>
      <NavSection title="AUTOMATING">
        <NavLink icon={RiInputMethodLine}>Records</NavLink>
        <NavLink icon={RiGitMergeLine}>Records</NavLink>
      </NavSection>
    </Stack>
  );
}
