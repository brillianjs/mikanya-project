import {
  Card,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { FiRefreshCcw } from "react-icons/fi";

const MikrotikConfigurationComponent = () => {
  return (
    <div className="w-full">
      <Card p={5} gap={6}>
        <span>
          <Heading fontSize={20}>Mikrotik</Heading>
        </span>
        <form>
          <FormControl>
            <FormLabel>IP Mikrotik</FormLabel>
            <Input></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password"></Input>
          </FormControl>
          <div className="flex flex-row gap-4 mt-6">
            <Button colorScheme={"purple"}>Save</Button>
            <Button colorScheme="green">Connect</Button>
            <Button colorScheme="blue">Ping</Button>
            <Button colorScheme={"yellow"}>
              <FiRefreshCcw />
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default MikrotikConfigurationComponent;
