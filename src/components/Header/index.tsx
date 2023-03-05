import React from "react";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";

const Header: React.FC = () => {
  return (
    <>
      <Flex justify="space-between" w="40%" mx="auto" mt="20px">
        <Flex gap={3} align="center">
          <Avatar src="https://cdn.dribbble.com/users/821812/avatars/small/14eea0b9af2401b8e120618f692b71b2.jpg?1587300850" />
          <Box>
            <Text fontSize="16px" fontWeight={500} color="#0d0c22">
              ToDo Task List
            </Text>
            <Text fontSize="14px" lineHeight="20px" color="#3d3d4e">
              David Clinton
            </Text>
          </Box>
        </Flex>
        <Flex justify="space-between" alignItems="center" gap={5}>
          <Button
            borderRadius="8px"
            color="#fff"
            bg="#ea4c89"
            boxSizing="border-box"
            fontWeight={500}
            fontSize="14px"
            h="40px"
            _hover={{ bg: "#ea4c89" }}
          >
            Save
          </Button>
          <Button
            bg="#f3f3f4"
            h="40px"
            borderRadius="8px"
            color="#0d0c22"
            boxSizing="border-box"
            fontWeight={500}
            _hover={{ bg: "#f3f3f4" }}
            fontSize="14px"
          >
            Discard
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
