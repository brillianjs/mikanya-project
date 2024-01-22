import { Card, Heading, Divider, Text } from "@chakra-ui/react";
import { FaRegListAlt } from "react-icons/fa";

const ListRouterComponent = () => {
  return (
    <div className="w-full flex flex-col">
      <Card p={5} gap={6}>
        <span className="flex flex-row items-center gap-4">
          <FaRegListAlt />
          <Heading fontSize={20}>Daftar Router</Heading>
        </span>
        <Divider />
        <div>
          <div className="w-full flex flex-row justify-center items-center">
            <div className="w-full border border-b-0"></div>
            <Text className="whitespace-nowrap px-3">
              Tidak ada router terdaftar
            </Text>
            <div className="w-full border border-b-0"></div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ListRouterComponent;
