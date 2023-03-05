import * as React from "react";
import { Box, Flex } from "@chakra-ui/layout";

const ToDoList: React.FC = () => {
  return (
    <Flex
      w="50%"
      mt="20px"
      bg="#f3f3f4"
      justify="center"
      mx="auto"
      h="500px"
      align="center"
    >
      <Box textAlign="center" bg="#5b75e3" w="90%" p="8px" h="400px">
        <Box bg="#fff">Hello</Box>
      </Box>
    </Flex>
  );
};

export default ToDoList;
