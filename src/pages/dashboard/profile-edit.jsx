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
            <FormLabel>First name</FormLabel>
            <Input placeholder=" " />
          </FormControl>
          <FormControl variant="floating" id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input placeholder=" " type="password" />
          </FormControl>
          <Button>Save</Button>
        </form>
      </Card>
    </div>
  );
};

export default ProfileEdit;
