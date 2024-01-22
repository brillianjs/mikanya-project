import { Card, Heading, FormControl, FormLabel, Input } from "@chakra-ui/react";

const SessionNameComponent = () => {
  return (
    <div className="w-full">
      <Card p={5} gap={6}>
        <span>
          <Heading fontSize={20}>Sesi</Heading>
        </span>
        <form>
          <FormControl>
            <FormLabel>Nama Sesi</FormLabel>
            <Input placeholder="Masukkan nama sesi"></Input>
          </FormControl>
        </form>
      </Card>
    </div>
  );
};

export default SessionNameComponent;
