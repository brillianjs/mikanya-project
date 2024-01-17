import { Outlet } from "react-router";
import NavbarComponent from "../components/navbar";

export default function RootPage() {
  return (
    <>
      <NavbarComponent />
      <Outlet />
    </>
  );
}
