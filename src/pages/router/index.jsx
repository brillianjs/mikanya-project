import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const RouterManagementPage = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Router Management Page
      </Heading>
      <Text>
        This is the router management page. You can add, edit, and delete
        routers here.
      </Text>
      {/* Add your router management components and logic here */}
    </Box>
  );
};

export default RouterManagementPage;
