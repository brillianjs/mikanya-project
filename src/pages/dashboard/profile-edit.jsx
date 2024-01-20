import {
  Card,
  Heading,
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
} from "@chakra-ui/react";

const ProfileEdit = () => {
  return (
    <div className="w-full">
      <Card p={5}>
        <form action="" className="flex flex-col gap-4">
          {/* <Heading fontSize={20}>Profile Edit</Heading> */}
          <FormControl variant="floating" id="first-name" isRequired>
            <Input placeholder=" " />
            <FormLabel>First name</FormLabel>
          </FormControl>
          <FormControl variant="floating" id="password" isRequired>
            <Input placeholder=" " type="password" />
            <FormLabel>Password</FormLabel>
          </FormControl>
          <Button>Save</Button>
        </form>
      </Card>
    </div>
  );
};

export default ProfileEdit;
