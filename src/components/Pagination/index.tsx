import { HStack, Button, Box } from "@chakra-ui/react";
import { PagintationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <HStack mt="8" justify="space-between" align="center" spacing="6">
      <Box>
        <strong>0</strong> - <strong>10</strong> of <strong>100</strong>
      </Box>
      <HStack spacing="2">
        <PagintationItem isCurrent number={1} />
        <PagintationItem number={2} isCurrent={false} />
        <PagintationItem number={3} isCurrent={false} />
        <PagintationItem number={4} isCurrent={false} />
        <PagintationItem number={5} isCurrent={false} />
        <PagintationItem number={6} isCurrent={false} />
      </HStack>
    </HStack>
  );
}
