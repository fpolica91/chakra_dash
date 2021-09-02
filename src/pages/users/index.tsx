import { Box } from "@chakra-ui/react";
import { Container as DefaultContainer } from "../../components/common/Container";
import { Header } from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function UserList() {
  return (
    <Box>
      <Header />
      <DefaultContainer>
        <Sidebar />
      </DefaultContainer>
    </Box>
  );
}
