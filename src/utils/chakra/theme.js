// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
};

// 3. extend the theme
const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
});

export default theme;
