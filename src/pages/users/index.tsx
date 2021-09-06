import {
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  Table,
  Tr,
  Th,
  Checkbox,
  Thead,
  Tbody,
  useBreakpointValue,
} from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import Link from "next/link";

import { Container as DefaultContainer } from "../../components/common/Container";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";
import { Row } from "../../components/Table/Row";

export default function UserList() {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box>
      <Header />
      <DefaultContainer>
        <Sidebar />
        <Box flex="1" bg="gray.800" p="8" borderRadius={8}>
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="nomal">
              Users
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} />}
              >
                Register
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" w="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>User</Th>
                {isDesktop && <Th>Data</Th>}
                {isDesktop && <Th w="8"></Th>}
              </Tr>
            </Thead>

            <Tbody>
              <Row
                isDesktop={isDesktop}
                name="Fabricio Policarpo"
                email="fabriciopolicarpo0@gmail.com"
                date="June 25, 2021"
              />
              <Row
                isDesktop={isDesktop}
                name="Chloe Policarpo"
                email="chloe@gmail.com"
                date="June 25, 2021"
              />
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </DefaultContainer>
    </Box>
  );
}
