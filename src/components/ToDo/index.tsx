import * as React from "react";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/modal";
import AddIcon from "@mui/icons-material/Add";
import Icon from "@chakra-ui/icon";
import { Button, Input } from "@chakra-ui/react";

const ToDoList: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  let date = new Date().toUTCString().slice(5, 16);
  const [step, setStep] = React.useState(0);

  const modalData: Array<string> = [
    "What are you planning to do?",
    "When are you planning to do this",
  ];

  return (
    <Flex
      w="50%"
      mt="20px"
      bg="#f3f3f4"
      justify="center"
      mx="auto"
      h="800px"
      align="center"
      borderRadius="8px"
    >
      <Flex bg="#5b75e3" w="95%" h="680px" borderRadius="8px">
        <Flex
          bg="#fff"
          w="80%"
          justify="center"
          m="auto"
          borderRadius="12px"
          h="600px"
        >
          <Flex justify="space-between" w="100%" p="40px">
            <Heading as="h3" fontSize="26px">
              {date}
            </Heading>
            <Icon
              as={AddIcon}
              bg="#5b75e3"
              color="#fff"
              boxSize="50px"
              borderRadius="50%"
              cursor="pointer"
              onClick={() => {
                setIsOpen(true);
                setStep(0);
              }}
            />
          </Flex>
        </Flex>
      </Flex>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        isCentered
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton
            _focusVisible={{ outline: "none" }}
            _hover={{ bg: "none" }}
          />
          <ModalBody mt="40px">
            <Text mb="20px">{modalData[step]} </Text>
            <Input />
            <Flex justify="space-between" mt="30px">
              <Button
                bg="#f3f3f4"
                h="40px"
                borderRadius="8px"
                color="#0d0c22"
                boxSizing="border-box"
                display={step === 0 ? "none" : "block"}
                fontWeight={500}
                _hover={{ bg: "#f3f3f4" }}
                fontSize="14px"
                onClick={() => setIsOpen(false)}
              >
                Discard
              </Button>
              <Button
                borderRadius="8px"
                color="#fff"
                bg="#ea4c89"
                float="right"
                boxSizing="border-box"
                fontWeight={500}
                fontSize="14px"
                h="40px"
                _hover={{ bg: "#ea4c89" }}
                onClick={() => {
                  setStep(step + 1);
                }}
              >
                {step === 1 ? "Submit" : "Next"}
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default ToDoList;
