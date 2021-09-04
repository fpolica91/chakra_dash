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
} from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";

import { Container as DefaultContainer } from "../../components/common/Container";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";
import { Row } from "../../components/Table/Row";

export default function UserList() {
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
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} />}
            >
              Register
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" w="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>User</Th>
                <Th>Data</Th>
                <Th w="8"></Th>
              </Tr>
            </Thead>

            <Tbody>
              <Row
                name="Fabricio Policarpo"
                email="fabriciopolicarpo0@gmail.com"
                date="June 25, 2021"
              />
              <Row
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
