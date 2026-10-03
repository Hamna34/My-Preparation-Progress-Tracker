import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box
      w="250px"
      h="100vh"
      bg="white"
      borderRightWidth="1px"
      borderColor="gray.200"
      p="5"
      position="fixed"
      left="0"
      top="0"
    >
      {/* Logo */}
      <Box mb="10">
        <Heading size="md">
          InterviewPrep
        </Heading>

        <Text
          fontSize="sm"
          color="gray.500"
          mt="1"
        >
          Study Tracker
        </Text>
      </Box>

      {/* Navigation */}
      <VStack align="stretch" gap="2">
        <Button
          justifyContent="flex-start"
          variant="subtle"
          colorPalette="blue"
        >
          Dashboard
        </Button>

        <Button
          justifyContent="flex-start"
          variant="ghost"
        >
          Questions
        </Button>

        <Button
          justifyContent="flex-start"
          variant="ghost"
        >
          Add Question
        </Button>
      </VStack>

      {/* Bottom profile */}
      <Box
        position="absolute"
        bottom="6"
        left="5"
        right="5"
      >
        <Box
          borderTopWidth="1px"
          borderColor="gray.200"
          pt="4"
        >
          <Text fontWeight="medium">
            Hamna Khan
          </Text>

          <Text
            fontSize="sm"
            color="gray.500"
          >
            Software Developer
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;