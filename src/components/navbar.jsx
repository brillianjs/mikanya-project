import { Box, Heading, Text, useColorMode, Button } from "@chakra-ui/react";
import { CiLight, CiDark } from "react-icons/ci";
import Logo from "../assets/logo.png";

export default function NavbarComponent() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <div class="h-10 bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center">
        <Text fontWeight={"semibold"} fontSize={13} color={"white"}>
          Sebuah platform manajemen jaringan yang dirancang dengan inspirasi 💎{" "}
          {"  "}
          <Button
            size={"sm"}
            ml={7}
            fontSize={13}
            color={"white"}
            colorScheme="whiteAlpha"
          >
            PELAJARI LEBIH LANJUT
          </Button>
        </Text>
      </div>
      <Box
        px={20}
        py={5}
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={"row"}
        alignItems={"center"}
      >
        <span className="flex flex-row  justify-center items-center">
          <img className="w-16" src={Logo} alt="logo-image" />
          <Heading>mikanya</Heading>
        </span>
        <div>
          <a href="/login">Terminal</a>
          <a href="/register">Register</a>
          <Button onClick={toggleColorMode}>
            {colorMode !== "light" ? <CiLight /> : <CiDark />}
          </Button>
        </div>
      </Box>
    </>
  );
}
