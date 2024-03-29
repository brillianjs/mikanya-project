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
        <Box px={10} h="100vh" className="hidden lg:block">
          <Flex direction="column" p="4" fontWeight={"semibold"}>
            <ChakraLink as={ReactRouterLink} to="/" mb="4">
              Home
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/dashboard" mb="4">
              Dashboard
            </ChakraLink>
            {/* Add more sidebar links as needed */}
          </Flex>
        </Box>

        {/* Main Content */}
        <Box flex="1" p="4">
          <Outlet />
        </Box>
      </Flex>
    </>
  );
}
