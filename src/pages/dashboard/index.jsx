import { Box, Heading, Text } from "@chakra-ui/react";
import { ChartDataUsage } from "./chart-data-usage";
import ProfileEdit from "./profile-edit";
import ListRouterComponent from "./list-router";

export default function DashboardPage() {
  return (
    <div className="w-full ">
      <div className="w-full flex justify-between items-center lg:flex-row flex-col">
        <Heading as={"h3"} fontSize={30}>
          Internet Connection
        </Heading>
        <div className="flex flex-row gap-10">
          <div>
            <span>
              <Text color={"gray.500"}>WAN IP Address</Text>
            </span>
            <span>
              <Text color={"purple.400"} fontWeight={"semibold"}>
                192.168.2.2
              </Text>
            </span>
          </div>
          <div>
            <span>
              <Text color={"gray.500"}>Software Version</Text>
            </span>
            <span>
              <Text color={"purple.400"} fontWeight={"semibold"}>
                V 9.02.05_multi
              </Text>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row gap-3">
        <ListRouterComponent></ListRouterComponent>
        <ProfileEdit></ProfileEdit>
      </div>
    </div>
  );
}
