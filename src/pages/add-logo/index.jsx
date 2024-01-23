import {
  Card,
  Heading,
  FormControl,
  Input,
  Text,
  InputRightAddon,
  Button,
  InputGroup,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Image,
} from "@chakra-ui/react";
import { MdOutlineDriveFolderUpload, MdDeleteOutline } from "react-icons/md";

const AddLogoPage = () => {
  return (
    <div>
      <Card p={5} gap={6}>
        <span className="flex flex-row items-center gap-4">
          <MdOutlineDriveFolderUpload />
          <Heading fontSize={20}>Unggah Logo</Heading>
        </span>
        <form>
          <span>
            <Text>Format Nama File : </Text>
          </span>
          <FormControl>
            <InputGroup>
              <Input type="file"></Input>
              <InputRightAddon>
                <Button>Unggah</Button>
              </InputRightAddon>
            </InputGroup>
          </FormControl>
        </form>

        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>Daftar Logo</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Box w={40}>
                    <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
                  </Box>
                </Td>
                <Td>
                  <Button colorScheme="red" leftIcon={<MdDeleteOutline />}>
                    Hapus
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default AddLogoPage;
