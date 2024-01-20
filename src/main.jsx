import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/root";
import LoginPage from "./pages/auth/login";
import theme from "./utils/chakra/theme";
import DashboardPage from "./pages/dashboard";
import SpeedtestPage from "./pages/speedtest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, path: "/", element: <DashboardPage /> },
      {
        path: "speedtest",
        element: <SpeedtestPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
