import {
  Card,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputRightAddon,
  InputGroup,
  Select,
} from "@chakra-ui/react";
import { FiRefreshCcw } from "react-icons/fi";

const MikanyaDataComponent = () => {
  return (
    <div className="w-full">
      <Card p={5} gap={6}>
        <span>
          <Heading fontSize={20}>Mikanya Data</Heading>
        </span>
        <form>
          <FormControl>
            <FormLabel>Nama Hotspot</FormLabel>
            <Input></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Nama DNS</FormLabel>
            <Input></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Mata Uang</FormLabel>
            <Input></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Memulai Otomatis</FormLabel>
            <InputGroup>
              <Input></Input>
              <InputRightAddon>Detik</InputRightAddon>
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Idle Timeout</FormLabel>

            <InputGroup>
              <Select>
                <option value="option1">5</option>
                <option value="option2">10</option>
                <option value="option2">30</option>
                <option value="option2">60</option>
                <option value="option2">Disable</option>
              </Select>
              <InputRightAddon>Menit</InputRightAddon>
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Antarmuka Lalu Lintas</FormLabel>
            <Input></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Laporan Langsung</FormLabel>
            <Select>
              <option value="option1">Enable</option>
              <option value="option2">Disable</option>
            </Select>
          </FormControl>
        </form>
      </Card>
    </div>
  );
};

export default MikanyaDataComponent;
