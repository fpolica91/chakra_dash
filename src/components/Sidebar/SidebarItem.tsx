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
        <NavLink href="/dashboard" icon={RiDashboardLine}>
          Dashboard
        </NavLink>
        <NavLink href="/users" icon={RiContactsLine}>
          Users
        </NavLink>
      </NavSection>
      <NavSection title="AUTOMATING">
        <NavLink href="/records" icon={RiInputMethodLine}>
          Records
        </NavLink>
        <NavLink href="/automation" icon={RiGitMergeLine}>
          Records
        </NavLink>
      </NavSection>
    </Stack>
  );
}
