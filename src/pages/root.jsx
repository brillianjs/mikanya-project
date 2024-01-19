import { Outlet } from "react-router";
import NavbarComponent from "../components/navbar";
import { Box, Grid, GridItem, Flex } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

export default function RootPage() {
  return (
    <>
      <NavbarComponent />
      <Flex>
        {/* Sidebar */}
        <Box w="250px" h="100vh">
          Sidebar Content
        </Box>

        {/* Main Content */}
        <Box p="4">
          {/* Isi konten disini */}
          Main Content
        </Box>
      </Flex>
    </>
  );
}
