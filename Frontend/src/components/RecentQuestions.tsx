import {
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

const questions = [
  {
    title: "What is React batching?",
    topic: "React",
    difficulty: "Medium",
    status: "Solved",
  },
  {
    title: "Two Sum",
    topic: "DSA",
    difficulty: "Easy",
    status: "Solved",
  },
  {
    title: "What are JavaScript closures?",
    topic: "JavaScript",
    difficulty: "Medium",
    status: "In Progress",
  },
  {
    title: "MongoDB aggregation",
    topic: "MongoDB",
    difficulty: "Hard",
    status: "Not Started",
  },
];

const RecentQuestions = () => {
  return (
    <Box
      bg="white"
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="xl"
      p="6"
      shadow="sm"
      mt="6"
    >
      <Flex
        justify="space-between"
        align="center"
        mb="6"
      >
        <Box>
          <Heading size="md">
            Recent Questions
          </Heading>

          <Text
            fontSize="sm"
            color="gray.500"
            mt="1"
          >
            Your recently added interview questions
          </Text>
        </Box>

        <Text
          fontSize="sm"
          color="blue.500"
          cursor="pointer"
          fontWeight="medium"
        >
          View all
        </Text>
      </Flex>

      <VStack
        align="stretch"
        gap="4"
      >
        {questions.map((question) => (
          <Flex
            key={question.title}
            justify="space-between"
            align="center"
            p="4"
            borderWidth="1px"
            borderColor="gray.100"
            borderRadius="lg"
            gap="4"
            flexWrap="wrap"
          >
            {/* Question information */}
            <Box flex="1">
              <Text fontWeight="medium">
                {question.title}
              </Text>

              <Text
                fontSize="sm"
                color="gray.500"
                mt="1"
              >
                {question.topic}
              </Text>
            </Box>

            {/* Difficulty */}
            <Badge
              colorPalette={
                question.difficulty === "Easy"
                  ? "green"
                  : question.difficulty === "Medium"
                  ? "orange"
                  : "red"
              }
            >
              {question.difficulty}
            </Badge>

            {/* Status */}
            <Badge
              colorPalette={
                question.status === "Solved"
                  ? "green"
                  : question.status === "In Progress"
                  ? "blue"
                  : "gray"
              }
            >
              {question.status}
            </Badge>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default RecentQuestions;