import {
  Badge,
  Box,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

import type { Question } from "../types/questions";

interface RecentQuestionsProps {
  questions: Question[];
}

const RecentQuestions = ({
  questions,
}: RecentQuestionsProps) => {
  const recentQuestions = questions.slice(0, 5);

  return (
    <Box
      bg="white"
      borderRadius="lg"
      p="6"
      mt="6"
      borderWidth="1px"
      borderColor="gray.100"
    >
      <Heading size="md" mb="5">
        Recent Questions
      </Heading>

      {recentQuestions.length === 0 ? (
        <Text color="gray.500">
          No questions added yet.
        </Text>
      ) : (
        <Box>
          {recentQuestions.map((question) => (
            <Flex
              key={question._id}
              justify="space-between"
              align="center"
              py="4"
              borderBottomWidth="1px"
              borderColor="gray.100"
              gap="4"
            >
              <Box>
                <Text fontWeight="600">
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

              <Flex
                align="center"
                gap="3"
                flexShrink={0}
              >
                <Badge
                  colorPalette={
                    question.difficulty === "Easy"
                      ? "green"
                      : question.difficulty === "Medium"
                      ? "yellow"
                      : "red"
                  }
                >
                  {question.difficulty}
                </Badge>

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
            </Flex>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default RecentQuestions;