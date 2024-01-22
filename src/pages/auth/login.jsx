import {
  Input,
  Button,
  Heading,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex h-screen justify-center items-center">
      <div className="flex flex-col w-full justify-center items-center">
        {/* logo */}
        <span className="flex flex-row justify-center items-center">
          <img className="w-16" src={Logo} alt="logo-image" />
          <Heading>mikanya</Heading>
        </span>
        {/* form */}
        <div className="max-w-sm container flex flex-col border p-5 rounded-lg">
          <form action="" className="space-y-4 w-full">
            {/* Username Input */}
            <FormControl>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input id="username" placeholder="Username" type="username" />
            </FormControl>

            {/* Password Input */}
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input id="password" placeholder="Password" type="password" />
            </FormControl>

            {/* Login Button */}
            <Button
              colorScheme="purple"
              color={"white"}
              width={"full"}
              onClick={() => navigate("/")}
            >
              {" "}
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
