import {
  Card,
  Heading,
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
  Divider,
} from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa";

const ProfileEdit = () => {
  return (
    <div className="w-full">
      <Card p={5} gap={6}>
        <span className="flex flex-row items-center  gap-3">
          <FaRegUser />
          <Heading fontSize={20} className="flex flex-row">
            Admin
          </Heading>
        </span>
        <Divider />
        <form action="" className="flex flex-col gap-4">
          {/* <Heading fontSize={20}>Profile Edit</Heading> */}
          <FormControl id="first-name" isRequired>
            <FormLabel>First name</FormLabel>
            <Input placeholder=" " />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input placeholder=" " type="password" />
          </FormControl>
          <FormControl>
            <FormLabel>Cetak Cepat QR</FormLabel>
            <Select placeholder="Cetak Cepat QR">
              <option value="option1">Enable</option>
              <option value="option2">Disable</option>
            </Select>
          </FormControl>
          <Button colorScheme="purple">Save</Button>
        </form>
      </Card>
    </div>
  );
};

export default ProfileEdit;
