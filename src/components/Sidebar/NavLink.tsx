import { Icon, Link, Text, LinkProps } from "@chakra-ui/react";
import { ElementType } from "toasted-notes/node_modules/@types/react";

interface NavlinkProps {
  icon: ElementType;
  children: string;
}

export function NavLink({ icon, children, ...rest }: NavlinkProps) {
  return (
    <Link d="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
