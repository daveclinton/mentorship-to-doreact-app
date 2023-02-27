import * as React from "react";
import { Flex, Box } from "@chakra-ui/react";
import ToDoList from "./components/ToDoList";

const App: React.FC = () => {
  return (
    <Flex justifyContent="center" h="100vh" alignItems="center">
      <Box boxShadow="0px 2px 20px rgba(0, 0, 0, 0.1)" boxSize="700px">
        <ToDoList />
      </Box>
    </Flex>
  );
};

export default App;
