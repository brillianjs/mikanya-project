import SessionNameComponent from "./session-name";
import MikrotikConfigurationComponent from "./mikrotik-configuration";
import MikanyaDataComponent from "./mikanya-data";

const SessionSetting = () => {
  return (
    <div className="flex flex-col gap-4">
      <SessionNameComponent></SessionNameComponent>
      <MikrotikConfigurationComponent></MikrotikConfigurationComponent>
      <MikanyaDataComponent></MikanyaDataComponent>
    </div>
  );
};

export default SessionSetting;
