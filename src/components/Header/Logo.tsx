import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      w="64"
      fontWeight="bold"
      letterSpacing="tight"
    >
      dashgo
      <Text as="span" color="pink.500" ml="1">
        .
      </Text>
    </Text>
  );
}
