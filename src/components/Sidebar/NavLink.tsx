import { Icon, Link as ChakraLink, Text, LinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import Link from "next/link";

interface NavlinkProps extends LinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavlinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink d="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </Link>
  );
}
