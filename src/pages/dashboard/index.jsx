import { Box, Heading, Text } from "@chakra-ui/react";
import { ChartDataUsage } from "./chart-data-usage";
import ProfileEdit from "./profile-edit";
import ListRouterComponent from "./list-router";

export default function DashboardPage() {
  return (
    <div className="w-full ">
      <div className="w-full flex justify-between items-center lg:flex-row flex-col"></div>
      <div className="w-full flex flex-row gap-3">
        <ListRouterComponent></ListRouterComponent>
        <ProfileEdit></ProfileEdit>
      </div>
    </div>
  );
}
