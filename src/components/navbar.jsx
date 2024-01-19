import { Box, Heading, Text, useColorMode, Button } from "@chakra-ui/react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io5";
import { BsYoutube } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function NavbarComponent() {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  return (
    <>
      <div className="h-10 bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center">
        <Text fontSize={13} color={"white"}>
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
        boxShadow={"xs"}
        bg={colorMode !== "light" ? "gray.800" : "white"}
        position={"sticky"}
        top={0}
        px={4}
        py={1}
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={"row"}
        alignItems={"center"}
      >
        <span className="flex flex-row  justify-center items-center">
          <img className="w-16" src={Logo} alt="logo-image" />
          <Heading className="hidden lg:block">mikanya</Heading>
        </span>
        <div className="space-x-3 flex flex-row">
          <Button
            variant="ghost"
            onClick={toggleColorMode}
            color={"gray.400"}
            fontSize={20}
          >
            {colorMode !== "light" ? <MdLightMode /> : <MdDarkMode />}
          </Button>
          <div className="space-x-1 hidden lg:block">
            <Button variant="ghost" color={"gray.400"} fontSize={20}>
              <IoLogoGithub />
            </Button>
            <Button variant="ghost" color={"gray.400"} fontSize={20}>
              <BsYoutube />
            </Button>
          </div>
          <Button onClick={() => navigate("/login")}>Logout</Button>
        </div>
      </Box>
    </>
  );
}
