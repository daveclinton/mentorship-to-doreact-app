import * as React from "react";
import {
  Box,
  FormControl,
  Input,
  Button,
  Flex,
  Text,
  Icon,
} from "@chakra-ui/react";
import DeleteIcon from "@mui/icons-material/Delete";

const ToDoList: React.FC = () => {
  const [task, setTask] = React.useState("");
  const [addedTask, setAddedTask] = React.useState<string[]>([]);

  const handleInputChange = (input: any) => setTask(input.target.value);

  const handleAddTask = () => {
    setAddedTask([...addedTask, task]);
    setTask;
  };

  return (
    <Box p="20px">
      <Flex>
        <FormControl display="flex" gap="20px">
          <Input type="Enter Plan" value={task} onChange={handleInputChange} />
          <Button type="submit" onClick={handleAddTask}>
            Add
          </Button>
        </FormControl>
      </Flex>
      <Box boxShadow="0px 2px 20px rgba(0, 0, 0, 0.1)">
        {addedTask.map((task, index) => (
          <Flex
            boxShadow="0px 2px 20px rgba(0, 0, 0, 0.1)"
            key={index}
            justifyContent="space-between"
            mt="10px"
          >
            <Text m="auto">{task}</Text>
            <Icon as={DeleteIcon} />
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default ToDoList;
